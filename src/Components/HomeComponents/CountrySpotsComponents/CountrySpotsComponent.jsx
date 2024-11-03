import { useEffect, useState } from "react";
import SpotCart from "../../SpotCart";

const CountrySpotsComponent = () => {
  const [touristsSpotData, setTouristsSpotData] = useState(null);

  const touristsSpotLoadData = () => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/country/random/6`)
      .then((response) => response.json())
      .then((data) => setTouristsSpotData(data))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    touristsSpotLoadData();
  }, []);
  console.log(touristsSpotData);
  if (!touristsSpotData) {
    return <p>Loading</p>;
  } else if (touristsSpotData.length === 0) {
    return <></>;
  }
  const { chosenCountry, result } = touristsSpotData;
  return (
    <div className="mt-[100px] text-center grid gap-3 mb-16">
      <h1 className="text-3xl md:text-5xl font-bold">
        Tourist spots in <span>{chosenCountry}</span>
      </h1>
      <p>Below Some of the Famous Tourists Spot added by our users</p>
      <div className=" mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-9">
        {result.map((touristsSpot, i) => (
          <SpotCart key={i} touristsSpot={touristsSpot} />
        ))}
      </div>
    </div>
  );
};

export default CountrySpotsComponent;
