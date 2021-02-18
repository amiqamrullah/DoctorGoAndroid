import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCuoeX5LUAmrb33HiZvOflyECAmLA6PITY",
  authDomain: "doctorgo-74dd2.firebaseapp.com",
  projectId: "doctorgo-74dd2",
  storageBucket: "doctorgo-74dd2.appspot.com",
  messagingSenderId: "6407833447",
  appId: "1:6407833447:web:90e402ffe35ef0938591c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Fire = firebase;
export default Fire;