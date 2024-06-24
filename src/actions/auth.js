import { firebase, googleAuthProvider } from "../firebase/firebase";

//L.162: actions to serve the authentication process for sign in and sign out
// all the functions we use here is from the firebase Docs

//L.165
export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
