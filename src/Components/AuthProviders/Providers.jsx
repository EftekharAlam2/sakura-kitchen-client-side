import {
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
const provider = new GoogleAuthProvider();

const Providers = ({ children }) => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("auth sate changed", currentUser);
  //     setUser(currentUser);
  //     setLoading(false);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  // const logOut = () => {
  //   return signOut(auth);
  // };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    signIn,
    googleSignIn,
    // user,
    // logOut,
    // loading,
    createUser,
    updateUser,
  };

  return (
    <div>
      <Context.Provider value={authInfo}>{children}</Context.Provider>
    </div>
  );
};

export default Providers;
