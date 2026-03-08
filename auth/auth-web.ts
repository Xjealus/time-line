import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber, ConfirmationResult, type Auth } from "firebase/auth";
import { AuthUser, IAuthService, EmailPasswordCredentials, PhoneCredentials } from "./auth-interface";

const firebaseConfig = {
  apiKey: "AIzaSyBAG-OtahFozu7mbwfXhVFBmsOLMihw63Q",
  authDomain: "trackerapp-899a9.firebaseapp.com",
  projectId: "trackerapp-899a9",
  storageBucket: "trackerapp-899a9.firebasestorage.app",
  messagingSenderId: "1044180344647",
  appId: "1:1044180344647:web:e31331a1d2e01570847662",
  measurementId: "G-C3CTXL6WRP"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth: Auth = getAuth(firebaseApp);

function mapUser(u: any): AuthUser {
  return {
    uid: u.uid,
    email: u.email,
    displayName: u.displayName,
    photoUrl: u.photoURL,
  };
}

let verifier: RecaptchaVerifier | null = null;
let confirmationResult: ConfirmationResult | null = null;

const recaptchaContainerId: string = "recaptcha-container";

export function getRecaptchaVerifier(containerId: string): RecaptchaVerifier {
  if (!verifier) {
    verifier = new RecaptchaVerifier(firebaseAuth, containerId, {
      size: "invisible",
    });
  }
  return verifier;
}


export class FirebaseWebAuthService implements IAuthService {
  async getCurrentUser() {
    return firebaseAuth.currentUser
      ? mapUser(firebaseAuth.currentUser)
      : null;
  }


  async loginWithEmailPassword(creds: EmailPasswordCredentials) {
    const r = await signInWithEmailAndPassword(
      firebaseAuth,
      creds.email,
      creds.password
    );
    return mapUser(r.user);
  }


  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const r = await signInWithPopup(firebaseAuth, provider);
    return mapUser(r.user);
  }


  async logout() {
    await firebaseAuth.signOut();
  }


  async startPhoneLogin(
    creds: PhoneCredentials
  ): Promise<{ verificationId: string }> {
    const verifier = getRecaptchaVerifier(recaptchaContainerId);
    confirmationResult = await signInWithPhoneNumber(
      firebaseAuth,
      creds.phoneNumberE164,
      verifier
    );
    return { verificationId: confirmationResult.verificationId };
  }


  async confirmPhoneCode(payload: { verificationId: string; verificationCode: string }): Promise<AuthUser> {
    if (!confirmationResult) {
      throw new Error("No confirmation result");
    }
    const r = await confirmationResult.confirm(payload.verificationCode);
    return mapUser(r.user);
  }


}









