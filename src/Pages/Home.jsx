import { Link } from "react-router-dom";
import Banners from "../Components/HomeComponents/BannerComponents/Banners";
import CountrySpotsComponent from "../Components/HomeComponents/CountrySpotsComponents/CountrySpotsComponent";
import SomeSpots from "../Components/HomeComponents/SomeSpotsComponents/SomeSpots";

const Home = () => {
  return (
    <div>
      <Banners />
      <SomeSpots />
      <CountrySpotsComponent />
      <div className="text-center">
        <Link
          to={"/AllSpot"}
          className="relative px-5 py-3 overflow-hidden font-medium text-sky-300 bg-gray-100 border-2 border-sky-300 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-sky-300 group-hover:w-full ease" />
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-sky-300 group-hover:w-full ease" />
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-300 group-hover:h-full ease" />
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-sky-300 group-hover:h-full ease" />
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-sky-400 opacity-0 group-hover:opacity-100" />
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-semibold text-lg">
            Explore More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
