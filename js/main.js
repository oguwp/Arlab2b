"use strict";

// ========== Firebase sign in functionality ========== //

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQb5VFfGbkci_JRnHAl3qn7UYZBsDjTG8",
  authDomain: "test-39336.firebaseapp.com",
  databaseURL: "https://test-39336.firebaseio.com",
  projectId: "test-39336",
  storageBucket: "test-39336.appspot.com",
  messagingSenderId: "876793984263",
  appId: "1:876793984263:web:ecbabd9c49b0cde1d541a2",
  measurementId: "G-0TL65VV6L9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let _firebaseUI;

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // if user exists and is authenticated
    userAuthenticated(user);
  } else { // if user is not logged in
    userNotAuthenticated();
  }
});

function userAuthenticated(user) {
  appendUserData(user);
  showLoader(false);
}

function userNotAuthenticated() {
  showPage("login");

  // Firebase UI configuration
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '#dashboard'
  };
  // Init Firebase UI Authentication
  if (!_firebaseUI) {
    _firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
  }
  _firebaseUI.start('#firebaseui-auth-container', uiConfig);
  showLoader(false);
}

// sign out user
function logout() {
  firebase.auth().signOut();
}