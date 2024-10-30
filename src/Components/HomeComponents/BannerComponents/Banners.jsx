import { Carousel } from "flowbite-react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

const Banners = () => {
  const touristsSpotData = useLoaderData();
  if (!touristsSpotData){
    return <p>Loading</p>
  }
  return (
    <div className="mt-4 md:mt-16">
      <div className="m-auto h-[220px] md:h-[320px] lg:h-[600px] w-[600px] md:w-[700px] lg:w-[1200px]">
        <Carousel 
        // slideInterval={1000}
        >
          {touristsSpotData	.map((touristsSpot) => (
            <Banner key={touristsSpot._id} touristsSpot={touristsSpot}/>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banners;
