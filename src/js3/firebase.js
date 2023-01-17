export const user = {
  UID: "",
};

const arcaneFirebaseConfig = {
  apiKey: "AIzaSyAriYzDoI2QSvgpExCB3KVzw-YdWaNxPPU",
  authDomain: "arcane-24cff.firebaseapp.com",
  databaseURL: "https://arcane-24cff-default-rtdb.firebaseio.com",
  projectId: "arcane-24cff",
  storageBucket: "arcane-24cff.appspot.com",
  messagingSenderId: "662152855571",
  appId: "1:662152855571:web:b4b7f1505d3cbc652dffe6",
};

const app = firebase.initializeApp(arcaneFirebaseConfig);
const auth = firebase.auth(app);

login.init();

// makeUser()
// function makeUser(){
//   auth().createUserWithEmailAndPassword('poop@gmail.com', 'cubbydog1');
//   console.log(auth())
//   console.log("makeUser Worked");
// };
