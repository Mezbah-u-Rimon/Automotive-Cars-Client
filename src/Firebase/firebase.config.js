import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDtcm7ASKqnSnCgeFRbVzo7kqCE6lmmU80",
    authDomain: "automotive-car-fbe6c.firebaseapp.com",
    projectId: "automotive-car-fbe6c",
    storageBucket: "automotive-car-fbe6c.appspot.com",
    messagingSenderId: "743619034271",
    appId: "1:743619034271:web:7905a118e678fc8494b6aa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth