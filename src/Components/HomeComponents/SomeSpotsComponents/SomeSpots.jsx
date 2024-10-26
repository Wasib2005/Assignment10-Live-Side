import { useEffect, useState } from "react";
import SpotCart from "../../SpotCart";

const SomeSpots = () => {
  const [touristsSpotData, setTouristsSpotData] = useState(null);

  const touristsSpotLoadData = () => {
    fetch("http://localhost:5000/random/12")
      .then((response) => response.json())
      .then((data) => setTouristsSpotData(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    touristsSpotLoadData();
  }, []);

  return (
    <div>
      <h1 className="text-4xl md:text-5xl text-center font-bold my-10 md:my-20">Some Tourists Spot Added by Our User</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
        {touristsSpotData ? (
          touristsSpotData.map((touristsSpot) => (
            <SpotCart key={touristsSpot._id} touristsSpot={touristsSpot} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SomeSpots;
