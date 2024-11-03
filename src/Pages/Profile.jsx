import { useContext } from "react";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import Loader from "../Components/MainComponents/Loader";
import { FloatingLabel } from "flowbite-react";

const Profile = () => {
  const { user, isLoading, updateUserProfile } =
    useContext(RegistrationContext);
  if (isLoading) {
    return <Loader />;
  }
  const handleUploadForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const forAuth = { displayName: name, photoURL };
    const forDatabase = {
      updateData: { userName: name },
      userEmail: user.email,
    };
    await updateUserProfile(forAuth);
    await fetch(`${import.meta.env.VITE_DATABASE_URL}/updateUserProfile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forDatabase),
    });
    setTimeout(() => {
      window.location.reload();
    }, 700);
  };
  return (
    <div className="text-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">
        User Profile
      </h1>
      <form onSubmit={handleUploadForm}>
        <div className="md:flex w-full justify-between">
          <div className="md:w-[49%]">
            <FloatingLabel
              name="name"
              className=""
              defaultValue={user?.displayName}
              variant="outlined"
              label="Name"
              required
            />
          </div>
          <div className="md:w-[49%]">
            <FloatingLabel
              name="email"
              className="cursor-not-allowed opacity-75 "
              value={user?.email}
              variant="outlined"
              label="Email"
              readOnly
              disabled
            />
          </div>
        </div>
        <FloatingLabel
          name="photoURL"
          defaultValue={user?.photoURL}
          variant="outlined"
          label="Your Photo Url"
        />
        <div className="w-full text-left ml-2">
          <button className=" bg-sky-400 w-20 p-2 px-3 hover:bg-sky-700 rounded-lg">
            <input type="submit" value="Update" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
