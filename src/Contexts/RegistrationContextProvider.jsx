import PropTypes from "prop-types";
import { RegistrationContext } from "./RegistrationContext";

const RegistrationContextProvider = ({ children }) => {
  const userData = "hello";
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
