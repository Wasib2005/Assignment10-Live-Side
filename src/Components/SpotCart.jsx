import PropTypes from "prop-types";
import { IoLogoUsd, IoPeopleCircle } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SpotCart = ({ touristsSpot }) => {
  const {
    _id,
    user_email,
    average_cost,
    country_Name,
    image,
    location,
    totalVisitorsPerYear,
    tourists_spot_name,
    travel_time,
    user_name,
    user_photoUrl,
  } = touristsSpot;

  return (
    <Link to={`/Spot/${_id}`}>
      <div className="w-full md:w-[350px] border rounded-2xl flex flex-col flex-grow h-full p-4 gap-2 shadow-2xl pb-6 hover:bg-slate-100 hover:transition hover:duration-500 hover:ease-in-out hover:scale-105">
        <div className="min-h-[356px] md:min-h-[200px] border rounded-2xl">
          <img
            src={image}
            alt={`Photo of ${tourists_spot_name}`}
            className="min-h-[356px] md:min-h-[200px] rounded-2xl w-full"
          />
        </div>
        <div className="px-5 grid gap-2">
          <h1 className="font-bold text-lg">{tourists_spot_name}</h1>
          <hr className="border-dashed border-slate-400" />
          <hr className="border-dashed border-slate-400" />
          <h2>
            From: <span className="font-semibold">{country_Name}</span>
          </h2>
          <div className="flex justify-between">
            <h2 className="flex items-center gap-1">
              <IoLogoUsd />
              Cost: <span className="font-bold">{average_cost}</span>
            </h2>
            <h2 className="flex items-center gap-1">
              <IoMdTimer />
              Travel time: <span className="font-bold">{travel_time}</span>
            </h2>
          </div>
          <h2 className="flex items-center gap-1">
            <IoPeopleCircle />
            Visitors: <span className="font-bold">{totalVisitorsPerYear}</span>
          </h2>
          <hr className="border-dashed border-slate-400" />
          <hr className="border-dashed border-slate-400" />
          <h2 className="flex items-start gap-1">
            <span className="flex items-center">
              <FaLocationDot />
              Location:
            </span>
            <span className="font-bold">{location}</span>
          </h2>
        </div>
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
      </div>
    </Link>
  );
};

SpotCart.propTypes = {
  touristsSpot: PropTypes.object,
};

export default SpotCart;
