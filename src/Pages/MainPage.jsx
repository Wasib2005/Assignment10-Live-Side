import { Outlet } from "react-router-dom";
import NavBar from "../Components/MainComponents/NavBar";
import FooterSection from "../Components/MainComponents/FooterSection";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div className="h-[96px]" />
      <div className="min-h-[calc(100vh-96px-165px)]">
        <Outlet />
      </div>
      <FooterSection />
    </div>
  );
};

export default MainPage;
