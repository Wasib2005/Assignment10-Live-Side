import SpotForm from "../Components/SpotForm";

const UploadSpot = () => {
  return (
    <div className=" text-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10 md:mb-20 lg:mb-40 mt-10">Upload Tourist Sport</h1>
      <div>{<SpotForm isUpload={true} spotData={{}} />}</div>
    </div>
  );
};

export default UploadSpot;
