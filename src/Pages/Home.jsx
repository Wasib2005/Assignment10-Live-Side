import Banners from "../Components/HomeComponents/BannerComponents/Banners";
import CountrySpotsComponent from "../Components/HomeComponents/CountrySpotsComponents/CountrySpotsComponent";
import SomeSpots from "../Components/HomeComponents/SomeSpotsComponents/SomeSpots";

const Home = () => {
  return (
    <div>
      <Banners />
      <SomeSpots />
      <CountrySpotsComponent />
    </div>
  );
};

export default Home;
