const loginWithFirebase = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
