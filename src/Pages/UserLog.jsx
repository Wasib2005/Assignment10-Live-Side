import { useContext, useState } from "react";
import { CiCircleMore } from "react-icons/ci";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, Navigate, useLocation } from "react-router-dom";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import toast from "react-hot-toast";
import { Button, Modal } from "flowbite-react";
import { GrGithub } from "react-icons/gr";

function UserLog() {
  const [singInOn, setSingInOn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordC, setShowPasswordC] = useState(false);
  const [color, setColor] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  console.log(location);

  const {
    singUpWithEmailAndPass,
    singInWithEmailAndPass,
    googleAuth,
    facebookAuth,
    githubAuth,
    user,
  } = useContext(RegistrationContext);

  const singIn_singUpHandle = () => {
    setSingInOn(!singInOn);
    setTimeout(() => {
      setColor(!color);
    }, 250);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    if (singInOn) {
      const email = form.email.value;
      const password = form.password.value;
      singInWithEmailAndPass(email, password);
    } else {
      const name = form.name.value;
      console.log(name);
      const email = form.email.value;
      const password = form.password.value;
      const cPassword = form.cPassword.value;
      const passwordLength = 8;
      if (password.length <= passwordLength) {
        toast.error(`The password must be more then ${passwordLength}`);
        return;
      } else if (!/[0-9]/.test(password)) {
        toast.error("You have to use at least one digit (0-9)");
        return;
      } else if (!/[A-Z]/.test(password)) {
        toast.error("You have to use at least one uppercase  (A-Z)");
        return;
      } else if (!/[a-z]/.test(password)) {
        toast.error("You have to use at least one lowercase  (a-z)");
        return;
      } else if (!/[@#$%^&*(){}+-=?<>,.`~']/.test(password)) {
        toast.error("You have to use at least one special character");
        return;
      } else if (password !== cPassword) {
        toast.error("The passwords don't match");
        return;
      }
      singUpWithEmailAndPass(email, password, name);
    }
  };

  if (user) {
    return <Navigate to={location?.state ? location.state : "/"} />;
  }

  return (
    <>
      <div className=" bg-slate-300 h-[100vh]">
        <div className="h-[100px] flex items-center justify-center md:mb-[100px] pt-28">
          <img src="favicon.svg" alt="" className="w-12" />
          <Link to={"/"} className="text-2xl md:text-4xl font-bold">
            Asian Tourism Hub
          </Link>
        </div>
        <div
          className={`md:h-[(100vh)] ${
            color
              ? "h-[calc(100vh-200px)] md:h-auto"
              : "h-[calc(100vh-400px)] md:h-auto"
          } flex items-center justify-center`}
        >
          <div className="flex flex-col w-[400px] md:flex-row md:w-[800px]  md:h-[500px] items-center justify-center ">
            <div
              className={`p-10 w-full md:w-1/2 md:shadow-2xl bg-slate-100 h-full items-center justify-center flex duration-[1000ms] transition 
                 ${
                   color
                     ? " rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                     : " rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
                 } 
                 ${
                   singInOn
                     ? " "
                     : "translate-y-full md:translate-y-0 md:translate-x-full "
                 } `}
            >
              <div className=" text-center w-2/3 grid gap-3">
                <h1 className="text-4xl font-bold">
                  {color ? "Sing In" : "Sing Up"}
                </h1>
                <div className="text-2xl flex gap-2 justify-center">
                  <button
                    onClick={googleAuth}
                    className="w-9 h-9 flex items-center justify-center  border rounded-full border-slate-400 hover:border-none hover:bg-slate-600"
                  >
                    <FaGoogle />
                  </button>
                  <button
                    onClick={facebookAuth}
                    className="w-9 h-9 flex items-center justify-center  border rounded-full border-slate-400 hover:border-none hover:bg-slate-600"
                  >
                    <FaFacebookF />
                  </button>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="w-9 h-9 flex items-center justify-center  border rounded-full border-slate-400 hover:border-none hover:bg-slate-600"
                  >
                    <CiCircleMore />
                  </button>
                  <Modal
                    dismissible
                    show={openModal}
                    onClose={() => setOpenModal(false)}
                  >
                    <Modal.Header>Terms of Service</Modal.Header>
                    <Modal.Body>
                      <div className="items-center flex gap-3 text-2xl justify-center">
                        <button onClick={githubAuth} className="w-9 h-9 flex items-center justify-center  border rounded-full border-slate-400 hover:border-none hover:bg-slate-600">
                          <GrGithub />
                        </button>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <form
                  onSubmit={handleRegistration}
                  className={`flex flex-col ${color ? "gap-6" : "gap-2"}`}
                >
                  {color || (
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="p-1 border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                    />
                  )}
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-1 border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                  />
                  <div className="relative">
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Your Password"
                      className="p-1 w-full border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                    />
                    <div
                      onClick={() => {
                        setShowPassword(!showPassword);
                        showPassword
                          ? document
                              .getElementById("password")
                              .setAttribute("type", "password")
                          : document
                              .getElementById("password")
                              .setAttribute("type", "text");
                      }}
                      className="absolute top-2 right-2"
                    >
                      {showPassword ? <IoEye /> : <IoEyeOff />}
                    </div>
                  </div>
                  {color || (
                    <div className="relative">
                      <input
                        required
                        id="cPassword"
                        type="password"
                        name="cPassword"
                        placeholder="Confirm Your Password"
                        className="p-1 w-full border border-black rounded-md outline-none focus:border-blue-400 focus:outline-blue-400"
                      />
                      <div
                        onClick={() => {
                          setShowPasswordC(!showPasswordC);
                          showPasswordC
                            ? document
                                .getElementById("cPassword")
                                .setAttribute("type", "password")
                            : document
                                .getElementById("cPassword")
                                .setAttribute("type", "text");
                        }}
                        className="absolute top-2 right-2"
                      >
                        {showPasswordC ? <IoEye /> : <IoEyeOff />}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`relative px-4 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group w-1/2 m-auto`}
                  >
                    <span
                      className={`absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2  group-hover:w-full ease
                        ${color ? "border-sky-400" : "border-green-500"}`}
                    />

                    <span
                      className={`absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 ${
                        color ? "border-sky-400" : "border-green-500"
                      } group-hover:w-full ease`}
                    />

                    <span
                      className={`absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${
                        color ? "bg-sky-400" : "bg-green-500"
                      } group-hover:h-full ease`}
                    />

                    <span
                      className={`absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 ${
                        color ? "bg-sky-400" : "bg-green-500"
                      } group-hover:h-full ease`}
                    />

                    <span className="absolute inset-0 w-full h-full duration-300 delay-300  opacity-0 group-hover:opacity-100" />

                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease font-semibold">
                      {color ? "Sign In" : "Sign Up"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 p-10 ${
                color
                  ? "bg-sky-400 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none "
                  : "bg-green-500 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none "
              } h-full items-center justify-center flex flex-col gap-2 duration-[1000ms] transition ${
                singInOn
                  ? ""
                  : "-translate-y-full md:-translate-y-0 md:-translate-x-full"
              } shadow-2xl `}
            >
              {color ? (
                <>
                  <h1 className="text-3xl font-bold">Welcome back!</h1>
                  <p>or</p>
                  <p className="w-4/6 text-center">
                    Are you new to this website? If you are sing up bellow!!!{" "}
                  </p>
                  <button
                    onClick={singIn_singUpHandle}
                    className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  >
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-green-500 rounded-lg group-hover:mt-0 group-hover:ml-0" />
                    <span className="absolute inset-0 w-full h-full bg-white rounded-lg " />
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-green-500 rounded-lg opacity-0 group-hover:opacity-100 " />
                    <span className="relative font-semibold text-green-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
                      Sing Up
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold">Hi there!</h1>
                  <p>or</p>
                  <p className="w-4/6 text-center">
                    You already have a account? If you do then sing in bellow!!!{" "}
                  </p>
                  <button
                    onClick={singIn_singUpHandle}
                    className="relative inline-flex items-center justify-center px-3 py-2 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  >
                    <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-sky-400 rounded-lg group-hover:mt-0 group-hover:ml-0" />
                    <span className="absolute inset-0 w-full h-full bg-white rounded-lg " />
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-sky-400 rounded-lg opacity-0 group-hover:opacity-100 " />
                    <span className="relative text-sky-400 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white font-semibold">
                      Sing In
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLog;
