import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAsZdjz4TbZBOVBePjaC27nAjBCTHsZlu8",
  authDomain: "attendance-management-sy-ae33f.firebaseapp.com",
  databaseURL: "https://attendance-management-sy-ae33f.firebaseio.com",
  projectId: "attendance-management-sy-ae33f",
  storageBucket: "attendance-management-sy-ae33f.appspot.com",
  messagingSenderId: "377274087747",
  appId: "1:377274087747:web:bd690181e89adc7e5897f6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;