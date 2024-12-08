import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV00ciBLakAysrMTKGzGY2IMOR5iyXMBQ",
  authDomain: "keypro-a9f7b.firebaseapp.com",
  projectId: "keypro-a9f7b",
  storageBucket: "keypro-a9f7b.firebasestorage.app",
  messagingSenderId: "515586268721",
  appId: "1:515586268721:web:a0862b825971dd62067f10",
  measurementId: "G-XY6E6ZJCRC"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);


export { auth, RecaptchaVerifier };

