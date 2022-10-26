// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzpaNvJDHN19xQR4b1VGnCv3nqlGwoo6Y",
  authDomain: "cook-with-joy.firebaseapp.com",
  projectId: "cook-with-joy",
  storageBucket: "cook-with-joy.appspot.com",
  messagingSenderId: "393593754369",
  appId: "1:393593754369:web:51ecf1d153bfdd89d30100"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;