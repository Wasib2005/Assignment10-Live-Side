import PropTypes from "prop-types";
import { useContext } from "react";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "./MainComponents/Loader";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useContext(RegistrationContext);

  const location = useLocation();


  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/Registration"} />;
  }

  return <div>{children}</div>;
};

PrivateRouter.propTypes = { children: PropTypes.node };

export default PrivateRouter;
