import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCjX83Wj9k81eO8TLgFxlflwbM2QIscfm8",
  authDomain: "monitorlizard-5371b.firebaseapp.com",
  projectId: "monitorlizard-5371b",
  storageBucket: "monitorlizard-5371b.appspot.com",
  messagingSenderId: "884271716496",
  appId: "1:884271716496:web:be84db0a73ced2765a6015",
  measurementId: "G-ZH2F4NDJ68"
};


const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = firebase.firestore()
export default app