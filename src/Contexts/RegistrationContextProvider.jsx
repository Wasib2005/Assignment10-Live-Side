import PropTypes from "prop-types";
import { RegistrationContext } from "./RegistrationContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Utilities/fireBaseConfig";
import toast from "react-hot-toast";

const RegistrationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const provider = new GoogleAuthProvider();
  
  const singUpWithEmailAndPass = (email, password, name) => {
    console.log({ userEmail: email, userName: name });

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
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


  const userSingOut = () => {
    signOut(auth)
      .then(toast.success("Sing out successful"))
      .catch(toast.error("Something went wrong!!! Please Contact with us."));
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
    singUpWithEmailAndPass,
    singInWithEmailAndPass,
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
