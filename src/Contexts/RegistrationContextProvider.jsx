import PropTypes from "prop-types";
import { RegistrationContext } from "./RegistrationContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utilities/fireBaseConfig";
import toast from "react-hot-toast";

const RegistrationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const updateUserProfile = (update, offToast = true) => {
    updateProfile(auth.currentUser, update)
      .then(offToast && toast.success("Profile Update successful!!!"))
      .catch((error) => console.log(error));
  };

  const singUpWithEmailAndPass = (email, password, displayName) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        await updateUserProfile({ displayName }, false);
        await toast.success(`Thanks for joining with us,
          ${result.user.displayName || result.user.email}!!!`);
        await fetch(`${import.meta.env.VITE_DATABASE_URL}/createUsers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail: email, userName: name }),
        }).catch((error) => console.log(error));
      })
      .catch((error) =>
        toast.error(
          error.code === "auth/email-already-in-use"
            ? `${email} already in use!!!`
            : `Something went wrong!!! Please Contact with us.`
        )
      );
  };

  const singInWithEmailAndPass = (email, password) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) =>
        toast.success(
          `Welcome back , ${result.user.displayName || result.user.email}!!!`
        )
      )
      .catch((error) =>
        toast.error(
          error.code === "auth/invalid-credential"
            ? `Your Email or Password incorrect!!!`
            : `Something went wrong!!! Please Contact with us.`
        )
      );
  };

  const googleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        await fetch(`${import.meta.env.VITE_DATABASE_URL}/createUsers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: result.user.email,
            userName: result.user.displayName,
          }),
        })
          .then((res) => res.json())
          .then((data) =>
            toast.success(`${
              data.userStatus === "User Created"
                ? "Thanks for joining with us "
                : "Welcome back "
            } 
          ${result.user.displayName || result.user.email}!!!`)
          )
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  const facebookAuth = () => {
    signInWithPopup(auth, facebookProvider)
      .then(async (result) => {
        await fetch(`${import.meta.env.VITE_DATABASE_URL}/createUsers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: result.user.email,
            userName: result.user.displayName,
          }),
        })
          .then((res) => res.json())
          .then((data) =>
            toast.success(`${
              data.userStatus === "User Created"
                ? "Thanks for joining with us "
                : "Welcome back "
            } 
          ${result.user.displayName || result.user.email}!!!`)
          )
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  const githubAuth = () => {
    signInWithPopup(auth, githubProvider)
      .then(async (result) => {
        await fetch(`${import.meta.env.VITE_DATABASE_URL}/createUsers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: result.user.email,
            userName: result.user.displayName,
          }),
        })
          .then((res) => res.json())
          .then((data) =>
            toast.success(`${
              data.userStatus === "User Created"
                ? "Thanks for joining with us "
                : "Welcome back "
            } 
          ${result.user.displayName || result.user.email}!!!`)
          )
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const sendVerification = () => {
    sendEmailVerification(auth.currentUser).then(
      toast.success(`A verification email has been sent to ${user.email}`)
    );
  };

  const userSingOut = () => {
    signOut(auth).then(toast.success("Sing out successful"));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unSubscribe();
  }, []);
  console.log(user);
  const userData = {
    user,
    isLoading,
    userSingOut,
    googleAuth,
    singUpWithEmailAndPass,
    singInWithEmailAndPass,
    updateUserProfile,
    sendVerification,
    facebookAuth,
    githubAuth,
  };
  return (
    <RegistrationContext.Provider value={userData}>
      {children}
    </RegistrationContext.Provider>
  );
};

RegistrationContextProvider.propTypes = {
  children: PropTypes.node,
};

export default RegistrationContextProvider;
