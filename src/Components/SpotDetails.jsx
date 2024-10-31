import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { IoLogoUsd, IoPeopleCircle } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { Link, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const data = useLoaderData();

  const {
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
    user_id,
  } = data[0];

  return (
    <div className="grid gap-8 justify-center text-xl font-medium mt-14">
      <h1 className="text-center text-4xl font-bold mb-10">{tourists_spot_name}</h1>
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
      <Link to={`/user/${user_id}`}>
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
          <p className="text-2xl font-bold">{user_name}</p>
        </div>
      </Link>
      <hr />
      <div className="w-auto">
        <Link
          to={-1}
          className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-sky-400 rounded-md group-hover:mt-0 group-hover:ml-0" />
          <span className="absolute inset-0 w-full h-full bg-white rounded-md " />
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-sky-400 rounded-md opacity-0 group-hover:opacity-100 " />
          <span className="relative text-sky-400 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            Button Text
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SpotDetails;
