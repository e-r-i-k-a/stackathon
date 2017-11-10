import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCpt23MbfOlSt0aBr2vCyT7O40SJiJB68Q",
  authDomain: "stackathon-23dae.firebaseapp.com",
  databaseURL: "https://stackathon-23dae.firebaseio.com",
  projectId: "stackathon-23dae",
  storageBucket: "stackathon-23dae.appspot.com",
  messagingSenderId: "974158622162"
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

export const auth = firebase.auth()

export default database;
