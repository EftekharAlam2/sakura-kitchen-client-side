import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.init";

export const Context = createContext(null);

const auth = getAuth(app);
const goggleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth sate changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const logOut = () => {
  //   return signOut(auth);
  // };

  const googleSignIn = () => {
    return signInWithPopup(auth, goggleProvider);
  };

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const authInfo = {
    createUser,
    updateUser,
    signIn,
    googleSignIn,
    githubSignIn,
    user,
    // logOut,
    loading,
  };

  return (
    <div>
      <Context.Provider value={authInfo}>{children}</Context.Provider>
    </div>
  );
};

export default Providers;
