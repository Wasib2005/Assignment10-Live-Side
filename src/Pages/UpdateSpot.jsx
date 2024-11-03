import { useLoaderData, useParams } from "react-router-dom";
import SpotForm from "../Components/SpotForm";

const UpdateSpot = () => {
  const spotData = useLoaderData();
  const { SpotId } = useParams();
  return (
    <div className=" text-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10 md:mb-20 lg:mb-40 mt-10">
        Update Tourist Sport
      </h1>
      <div>
        {<SpotForm isUpload={false} spotData={spotData[0]} id={SpotId} />}
      </div>
    </div>
  );
};

export default UpdateSpot;
