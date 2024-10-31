import { useContext, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { RegistrationContext } from "../../Contexts/RegistrationContext";
import { Avatar, Tooltip } from "flowbite-react";

const NavBar = () => {
  const [dropdownOff, setDropdownOff] = useState(true);
  const { user, userSingOut } = useContext(RegistrationContext);
  console.log(dropdownOff);
  const navLink = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? " text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-300"
            : "rounded-lg hover:bg-blue-300"
        }
      >
        <li className="p-2  font-semibold ">Home</li>
      </NavLink>
      <NavLink
        to={"/AllSpot"}
        className={({ isActive }) =>
          isActive
            ? " text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-300"
            : "rounded-lg hover:bg-blue-300"
        }
      >
        <li className="p-2  font-semibold ">Tourist Spot</li>
      </NavLink>
      <NavLink
        to={"/UpdateSpot"}
        className={({ isActive }) =>
          isActive
            ? " text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-300"
            : "rounded-lg hover:bg-blue-300"
        }
      >
        <li className="p-2  font-semibold ">Upload Spot</li>
      </NavLink>
      <NavLink
        to={"/My List"}
        className={({ isActive }) =>
          isActive
            ? " text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-300"
            : "rounded-lg hover:bg-blue-300"
        }
      >
        <li className="p-2  font-semibold ">My List</li>
      </NavLink>
    </>
  );
  return (
    <div>
      <nav className="p-4 bg-gray-100 text-gray-800 fixed w-full z-[990] ">
        <div className="container flex justify-between items-center h-16 mx-auto">
          <Link className="flex items-center">
            <img src="favicon.svg" alt="icon" className="w-[50px]" />
            <h1 className="text-4xl font-bold">Asian Tourism Hub</h1>
          </Link>

          <ul className="items-stretch hidden space-x-3 lg:flex text-lg">
            {navLink}
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex relative">
            {user ? (
              <>
                <div
                  onClick={() => setDropdownOff(!dropdownOff)}
                  className={`hover:bg-slate-50`}
                >
                  <Tooltip
                    content={user.displayName || user.email}
                    style="light"
                    placement="bottom"
                    animation="duration-1000"
                    className={`${dropdownOff || "hidden"}`}
                  >
                    {user.photoURL ? (
                      <Avatar
                        img={user.photoURL}
                        alt={`avatar of ${user.displayName || user.email}`}
                        rounded
                      />
                    ) : (
                      <div>
                        <p>
                          {user.displayName.slice(0, 2) ||
                            user.email.slice(0, 2)}
                        </p>
                      </div>
                    )}
                  </Tooltip>
                </div>
                <div
                  className={` duration-[600ms] z-0 text-xl transition translate-y-[10px] absolute right-0 top-10 ${
                    dropdownOff ? " translate-y-[-206px] " : " "
                  }
               `}
                >
                  <ul className="bg-slate-200 rounded-lg p-2 w-32 text-base text-left flex flex-col gap-2">
                    <div className=" rounded-lg hover:bg-blue-300">
                      <Tooltip
                        content={user.displayName || user.email}
                        style="light"
                        placement="left"
                        animation="duration-1000"
                        className="hover:bg-blue-300"
                      >
                        <Link
                          to={"/Profile"}
                          className=" hover:bg-blue-300"
                        >
                          <li className="p-2  font-semibold ">Profile</li>
                        </Link>
                      </Tooltip>
                    </div>
                    {user.emailVerified || (
                      <Link
                        to={"/Profile"}
                        className="rounded-lg hover:bg-blue-300"
                      >
                        <li className="p-2  font-semibold ">Verify</li>
                      </Link>
                    )}
                    <button
                      onClick={userSingOut}
                      className="text-left rounded-lg hover:bg-blue-300"
                    >
                      <li className="p-2  font-semibold ">Sing Out</li>
                    </button>
                  </ul>
                </div>
              </>
            ) : (
              <Link
                to={"/Registration"}
                className=" font-semibold rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 border-sky-400 text-sky-400"
              >
                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-sky-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease" />
                <span className="relative text-sky-400 transition duration-300 group-hover:text-white ease">
                  Sing In
                </span>
              </Link>
            )}
          </div>
          <div className="p-4 lg:hidden text-4xl relative">
            <div
              onClick={() => setDropdownOff(!dropdownOff)}
              className={`duration-[600ms] ${
                dropdownOff || "rotate-[90deg]"
              } hover:bg-slate-50`}
            >
              <HiOutlineMenu />
            </div>
            <div
              className={`duration-[600ms] z-0 text-xl translate-y-[10px] ${
                dropdownOff ? "translate-x-[190px]" : "translate-x-[-90px]"
              }
               absolute `}
            >
              <ul className="bg-slate-200 rounded-lg p-2 w-32 text-base text-left flex flex-col gap-2">
                {user ? (
                  <NavLink
                    to={"/Profile"}
                    className="rounded-lg hover:bg-blue-300"
                  >
                    <Tooltip
                      content={user.displayName || user.email}
                      style="light"
                      placement="left"
                    >
                      <li className="p-2  font-semibold ">Profile</li>
                    </Tooltip>
                  </NavLink>
                ) : (
                  <></>
                )}
                {navLink}
                {user ? (
                  <button
                    onClick={userSingOut}
                    className="text-left rounded-lg hover:bg-blue-300"
                  >
                    <li className="p-2  font-semibold ">Sing Out</li>
                  </button>
                ) : (
                  <NavLink
                    to={"/Registration"}
                    className={({ isActive }) =>
                      isActive
                        ? " text-blue-500 border-2 border-blue-500 rounded-lg hover:bg-blue-300"
                        : "rounded-lg hover:bg-blue-300"
                    }
                  >
                    <li className="p-2  font-semibold ">Sing In</li>
                  </NavLink>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
