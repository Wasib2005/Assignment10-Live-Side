
import PropTypes from "prop-types";
import { IoLogoUsd, IoPeopleCircle } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const SpotCart = ({ touristsSpot }) => {
  const {
    _id,
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

  const clickHandle = ()=>{
    console.log(_id)
  }
  return (
    <div className="w-full md:w-[350px] border rounded-2xl flex flex-col flex-grow p-4 gap-2 shadow-2xl hover:bg-slate-100" onClick={clickHandle}>
      <div className="min-h-[356px] md:min-h-[156px] border rounded-2xl">
        <img
          src={image}
          alt={`Photo of ${tourists_spot_name}`}
          className="rounded-2xl w-full"
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
        <h2 className="flex items-center gap-1">
          <FaLocationDot />
          Location: <span className="font-bold">{location}</span>
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
        <p className="text-2xl font-bold">{user_name}</p>
      </div>
    </div>
  );
};

SpotCart.propTypes = {
  touristsSpot: PropTypes.object,
};

export default SpotCart;
