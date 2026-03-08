import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

// Add smooth scrolling to html and body
document.documentElement.style.scrollBehavior = 'smooth';

// Bootstrap CSS
const bootstrapLink = document.createElement('link');
bootstrapLink.rel = 'stylesheet';
bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(bootstrapLink);

// Google Fonts
const fontsLink = document.createElement('link');
fontsLink.rel = 'stylesheet';
fontsLink.href = 'https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;600&family=Playfair+Display:ital,wght@0,700;1,700&display=swap';
document.head.appendChild(fontsLink);

// AOS CSS
const aosLink = document.createElement('link');
aosLink.rel = 'stylesheet';
aosLink.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
document.head.appendChild(aosLink);

// AOS JS
const aosScript = document.createElement('script');
aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
aosScript.async = true;
document.head.appendChild(aosScript);

// Lucide Icons JS
const lucideScript = document.createElement('script');
lucideScript.src = 'https://unpkg.com/lucide@latest';
lucideScript.async = true;
document.head.appendChild(lucideScript);

// Bootstrap JS
const bootstrapScript = document.createElement('script');
bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
bootstrapScript.async = true;
document.head.appendChild(bootstrapScript);

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
