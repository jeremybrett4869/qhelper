import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAvnxPXN2CyuEhRWhs0QrRNgFHLB6AdXDQ",
    authDomain: "qhelper-3c3c1.firebaseapp.com",
    projectId: "qhelper-3c3c1",
    storageBucket: "qhelper-3c3c1.appspot.com",
    messagingSenderId: "113699560677",
    appId: "1:113699560677:web:a2c8606c42a26a6de0480c"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;