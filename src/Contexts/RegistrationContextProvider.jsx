import PropTypes from "prop-types";
import { RegistrationContext } from "./RegistrationContext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utilities/fireBaseConfig";
import toast from "react-hot-toast";

const RegistrationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const singUpWithEmailAndPass = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success(`Thanks for joining with us, 
          ${result.user.displayName || result.user.email}!!!`);
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
