import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyCOQY9wzc8f6mEdUqGkbmP7b2P554V8XHw',
  authDomain: 'instagram-yt-4d551.firebaseapp.com',
  projectId: 'instagram-yt-4d551',
  storageBucket: 'instagram-yt-4d551.appspot.com',
  messagingSenderId: '243824653067',
  appId: '1:243824653067:web:95687c5bba228f6e59280e',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
