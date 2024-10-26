import { Outlet } from "react-router-dom";
import NavBar from "../Components/MainComponents/NavBar";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainPage;
