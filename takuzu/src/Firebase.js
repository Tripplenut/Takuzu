import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp ({
  apiKey: "AIzaSyBd_U1sDr4bc_cfk-Dlhgho-uLLR1Avads",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = app.auth();
export default app;