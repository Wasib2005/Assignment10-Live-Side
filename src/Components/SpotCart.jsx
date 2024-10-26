import React from "react";
import PropTypes from "prop-types";

const SpotCart = ({ touristsSpot }) => {
  const {
    _id,
    average_cost,
    country_Name,
    image,
    location,
    seasonality,
    short_description,
    totalVisitorsPerYear,
    tourists_spot_name,
    travel_time,
    user_email,
    user_name,
  } = touristsSpot;
  return (
    <div className="w-full md:w-[350px] border rounded-2xl flex flex-col flex-grow p-4 gap-2 shadow-2xl hover:bg-slate-100">
      <div className="min-h-[356px] md:h-[156px] border rounded-2xl">
        <img src={image} alt={`Photo of ${tourists_spot_name}`} className="rounded-2xl w-full"/>
      </div>
      <div className="pl-5 ">
        <h1 className="font-bold text-lg">{tourists_spot_name}</h1>
        <hr className="border-dashed border-slate-400"/>
        <h2>From: <span className="font-semibold">{country_Name}</span></h2>
      </div>

    </div>
  );
};

SpotCart.propTypes = {
  touristsSpot: PropTypes.object,
};

export default SpotCart;
