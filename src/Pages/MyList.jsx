import { useLoaderData } from "react-router-dom";
import SpotCart from "../Components/SpotCart";

const MyList = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold text-center mt-10 lg:text-6xl">
        Tourist Spot Added by Me
      </h1>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-9">
        {data.map((spot,i) => (
          <SpotCart key={i} touristsSpot={spot} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
