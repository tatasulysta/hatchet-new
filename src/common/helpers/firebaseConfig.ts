import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAEr6ysxPoMbiypzC1UV0CQNF_6KXh_WI0',
  authDomain: 'andalas-65a05.firebaseapp.com',
  projectId: 'andalas-65a05',
  storageBucket: 'andalas-65a05.appspot.com',
  messagingSenderId: '417641874410',
  appId: '1:417641874410:web:8fc8f7f257d7dc1cb72893',
  measurementId: 'G-FKQVN4GG6H',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
