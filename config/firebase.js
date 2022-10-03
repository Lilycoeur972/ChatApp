import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from'firebase/firestore';
import { Constants } from "expo-constants";

// Firebase configuration.
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId:Constants.manifest.extra.projectId,
    storageBucket:Constants.extra.storageBucket,
    appId:Constants.manifest.extra.appId,
    databaseURL:Constants.manifest.extra.databaseURL
};

//Initialisation de Firebase
initializeApp(firebaseConfig);
export const auth =getAuth();
export const database = getFirestore();

 
  