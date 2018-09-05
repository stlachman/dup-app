import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyAkFqhiWRowXlJ59gQA5HkfnL58fOujGQk",
      authDomain: "weight-traning-program.firebaseapp.com",
      databaseURL: "https://weight-traning-program.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// default export
export default base;