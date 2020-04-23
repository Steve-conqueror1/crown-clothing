import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCYqPW96sOgpXuC2u5zDDPWns5kNwIs9z4',
  authDomain: 'crown-db-c9ce1.firebaseapp.com',
  databaseURL: 'https://crown-db-c9ce1.firebaseio.com',
  projectId: 'crown-db-c9ce1',
  storageBucket: 'crown-db-c9ce1.appspot.com',
  messagingSenderId: '1014935163035',
  appId: '1:1014935163035:web:36e03d2bbb1ed8fc1eb63e',
  measurementId: 'G-6RBMNS65QK',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
