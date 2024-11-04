import { useEffect, useState } from "react";
import SpotCart from "../../SpotCart";

const SomeSpots = () => {
  const [touristsSpotData, setTouristsSpotData] = useState(null);

  const touristsSpotLoadData = () => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/random/6`)
      .then((res) => res.json())
      .then((data) => setTouristsSpotData(data))
      .catch((error) => console.error("Error:", error));
  };
  useEffect(() => {
    touristsSpotLoadData();
  }, []);
  
  if (!touristsSpotData){
    return <p>Loading</p>
  }

  if (touristsSpotData.length===0){
    return <p>Loading</p>
  }


  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center font-bold my-10 md:my-20">
        Some Tourists Spot Added by Our User
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
        {touristsSpotData.map((touristsSpot) => (
          <SpotCart key={touristsSpot._id} touristsSpot={touristsSpot} />
        ))}
      </div>
    </div>
  );
};

export default SomeSpots;
