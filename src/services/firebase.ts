import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_mnUMo8k8ym66gvcV5G4uj_YV1L-O72s",
  authDomain: "movieapps-project.firebaseapp.com",
  projectId: "movieapps-project",
  storageBucket: "movieapps-project.appspot.com",
  messagingSenderId: "586733698268",
  appId: "1:586733698268:ios:ae449350da324f2159c819",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
