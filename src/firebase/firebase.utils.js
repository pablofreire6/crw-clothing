import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBX9MhgyVerXIk54bVtQeuOnjp3cUv8YUo",
  authDomain: "crwn-db-52dd0.firebaseapp.com",
  projectId: "crwn-db-52dd0",
  storageBucket: "crwn-db-52dd0.appspot.com",
  messagingSenderId: "1098192968225",
  appId: "1:1098192968225:web:ee521c0fdc1785a5a3e160"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(e) {
        console.log('error creating user', e.message);
      }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;