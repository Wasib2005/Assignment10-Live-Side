import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { IoLogoUsd, IoPeopleCircle } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import Swal from "sweetalert2";
import Loader from "./MainComponents/Loader";

const SpotDetails = () => {
  const { user,isLoading } = useContext(RegistrationContext);
  const data = useLoaderData();
  const navigate = useNavigate();


  if (!data && isLoading) {
    return <Loader />;
  } else if (data.length === 0) {
    return <p>No data found</p>;
  }

  const {
    _id,
    image,
    tourists_spot_name,
    short_description,
    detailed_description,
    totalVisitorsPerYear,
    travel_time,
    average_cost,
    seasonality,
    country_Name,
    location,
    user_photoUrl,
    user_name,
    user_email,
  } = data[0];


  const deleteHandle = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `${import.meta.env.VITE_DATABASE_URL}/deleteSpotData/${_id}/${
            user.email
          }`,
          { method: "POST" }
        )
          .then((res) => res.json())
          .then((data) => {
            data.result === "Successfully" &&
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              }).then(navigate(-1));
          });
      }
    });
  };

  return (
    <div className="grid gap-8 justify-center text-xl font-medium mt-14">
      <h1 className="text-center text-4xl font-bold mb-10">
        {tourists_spot_name}
      </h1>
      <div className="flex justify-center">
        <img src={image} alt={tourists_spot_name} />
      </div>
      <hr />
      <div className="grid gap-4">
        <p className="mx-2">{short_description}</p>
        <hr />
        <p className="mx-2">{detailed_description}</p>
        <hr />
        <div className="ml-6 w-[400px] grid gap-2">
          <p className="flex justify-between">
            <span className="flex items-center gap-2">
              <TfiWorld /> Country:
            </span>
            <span className="font-semibold">{country_Name}</span>
          </p>
          <p className="flex justify-between">
            <span className="flex items-center gap-2">
              <IoPeopleCircle /> Total Visitors Per Year:
            </span>
            <span className="font-semibold">{totalVisitorsPerYear}</span>
          </p>
          <p className="flex justify-between">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              Seasonality:
            </span>
            <span className="font-semibold">{seasonality}</span>
          </p>
          <p className="flex justify-between">
            <span className="flex items-center gap-2">
              <IoMdTimer />
              Travel Time:
            </span>
            <span className="font-semibold">{travel_time}</span>
          </p>
          <p className="flex justify-between">
            <span className="flex items-center gap-2">
              <IoLogoUsd />
              Average Cost:
            </span>
            <span className="font-semibold">{average_cost}</span>
          </p>
        </div>
        <hr />
        <p className="flex items-center gap-2">
          <FaLocationArrow />
          Location:
          <span className="font-semibold">{location}</span>
        </p>
      </div>
      <hr />
      <Link to={`/user/${user_email}`}>
        <div className="flex items-center gap-2">
          {user_photoUrl ? (
            <img
              src={user_photoUrl}
              alt={`Photo of ${user_name}`}
              className=" w-[50px] rounded-full"
            />
          ) : (
            <>
              <CgProfile className="text-5xl" />
            </>
          )}
          <p className="text-2xl font-bold">{user_name || user_email}</p>
        </div>
      </Link>
      <hr />
      <div className="w-auto flex gap-4">
        <Link
          to={-1}
          className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-sky-400 rounded-md group-hover:mt-0 group-hover:ml-0" />
          <span className="absolute inset-0 w-full h-full bg-white rounded-md " />
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-sky-400 rounded-md opacity-0 group-hover:opacity-100 " />
          <span className="relative text-sky-400 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Go Back
          </span>
        </Link>
        {user?.email === user_email && (
          <>
            <Link
              to={`/UpdateSpot/${_id}`}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-green-400 rounded-md group-hover:mt-0 group-hover:ml-0" />
              <span className="absolute inset-0 w-full h-full bg-white rounded-md " />
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-green-400 rounded-md opacity-0 group-hover:opacity-100 " />
              <span className="relative text-green-400 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Update
              </span>
            </Link>
            <button
              onClick={deleteHandle}
              className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-red-600 rounded-md group-hover:mt-0 group-hover:ml-0" />
              <span className="absolute inset-0 w-full h-full bg-white rounded-md " />
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-red-600 rounded-md opacity-0 group-hover:opacity-100 " />
              <span className="relative text-red-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                Delete
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SpotDetails;
