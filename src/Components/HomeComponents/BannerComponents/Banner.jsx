import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Banner = ({ touristsSpot }) => {
  const {
    image,
    country_Name,
    tourists_spot_name,
    totalVisitorsPerYear,
    travel_time,
  } = touristsSpot;
  return (
    <div className="">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="m-auto h-[320px] md:h-[320px] lg:h-[600px] w-[600px] md:w-[700px] lg:w-[1200px]"
        />
        <div className="absolute top-0 border bg-black opacity-30 w-full h-full z-[1]" />
        <div className="absolute top-6 md:top-20 lg:top-32 left-[84px]  z-[2] grid gap-3 lg:gap-7">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold  text-white w-[330px] lg:w-[700px]">
            Checkout {tourists_spot_name} in {country_Name}
          </h1>
          <div className="lg:inline-flex gap-8 hidden ">
            <p className="text-slate-200 text-lg flex items-center gap-2">
              <span>
                <IoPeopleCircle />
              </span>
              <span>{totalVisitorsPerYear}</span>
            </p>
            <p className="text-slate-200 text-lg flex items-center gap-2">
              <span>
                <FaRegClock />
              </span>
              <span>{travel_time} days</span>
            </p>
          </div>
          <div>
            <Link
              to={"/AllSpot"}
              className="relative inline-flex items-center justify-start py-2 md:py-3 pl-2 md:pl-4 pr-12 overflow-hidden text-base md:text-xl font-semibold text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full" />
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Explore Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  touristsSpot: PropTypes.object,
};

export default Banner;
