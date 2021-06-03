import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBRa_Bh5x-HqPrVAOM3w3P6yfpswbjfK7E",
    authDomain: "ecommerce-front-1531f.firebaseapp.com",
    projectId: "ecommerce-front-1531f",
    storageBucket: "ecommerce-front-1531f.appspot.com",
    messagingSenderId: "991010486468",
    appId: "1:991010486468:web:57cba57cef8e22e2367191",
    measurementId: "G-MMP49P6YG6"
};

firebase.initializeApp(config);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
