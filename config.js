import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAVHqyHXqXHhkDvB3qAYZDs5D3_VSZlol4",
  authDomain: "pro-c67-908b6.firebaseapp.com",
  databaseURL: "https://pro-c67-908b6-default-rtdb.firebaseio.com",
  projectId: "pro-c67-908b6",
  storageBucket: "pro-c67-908b6.appspot.com",
  messagingSenderId: "419385348196",
  appId: "1:419385348196:web:a7136d2d1985a02443cf71"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();