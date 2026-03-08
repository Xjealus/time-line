import type { IAuthService } from "./auth-interface";
import { FirebaseWebAuthService } from "./auth-web";

export const authService: IAuthService = new FirebaseWebAuthService();
