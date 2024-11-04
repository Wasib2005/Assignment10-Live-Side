import { useLoaderData } from "react-router-dom";
import SpotCart from "../Components/SpotCart";

const SelectedUserList = () => {
  const data = useLoaderData();
  const { user_name } = data[0];

  if(!data){
    return<p>Loading</p>
  }
  return (
    <div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold my-20 text-center">
        Tourist spots add by {user_name}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
        {data.map((touristsSpot,i) => (
          <SpotCart key={i} touristsSpot={touristsSpot}/>
        ))}
      </div>
    </div>
  );
};

export default SelectedUserList;
