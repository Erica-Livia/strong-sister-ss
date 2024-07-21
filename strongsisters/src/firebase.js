import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3_-DIPdwe-A_pvMlRkcubPZerYVR_454",
  authDomain: "strongsisters-645ac.firebaseapp.com",
  projectId: "strongsisters-645ac",
  storageBucket: "strongsisters-645ac.appspot.com",
  messagingSenderId: "493924709528",
  appId: "1:493924709528:web:e619c53ed292aa97684ced",
  measurementId: "G-0G0F4HS9VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
