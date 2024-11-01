import PropTypes from "prop-types";

import { FloatingLabel, TextInput } from "flowbite-react";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import { useContext } from "react";
import toast from "react-hot-toast";
import { data } from "autoprefixer";

const SpotForm = ({ isUpload, isUpdate }) => {
  const { user } = useContext(RegistrationContext);
  if (!user) {
    return <p>loading</p>;
  }

  const { email, displayName } = user;
  const handleUploadForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const tourists_spot_data = {};
    const fields = [
      "user_id",
      "image",
      "tourists_spot_name",
      "country_Name",
      "location",
      "short_description",
      "detailed_description",
      "average_cost",
      "seasonality",
      "travel_time",
      "totalVisitorsPerYear",
      "user_email",
      "user_name",
    ];

    await fields.forEach((field) => {
      const input = form[field];
      if (input) {
        if (field === "user_email") {
          Object.assign(tourists_spot_data, { [field]: user.email });
        } else if (field === "user_name") {
          Object.assign(tourists_spot_data, { [field]: user.displayName });
        } else {
          Object.assign(tourists_spot_data, { [field]: input.value });
        }
      }
      console.log(tourists_spot_data);
    });
    if (isUpload) {
      console.log(tourists_spot_data);
      fetch(`${import.meta.env.VITE_DATABASE_URL}/UploadSpotData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tourists_spot_data),
      })
        .then((res) => res.json())
        .then((data) =>
          data.error?
          toast.error(
            `${tourists_spot_data.tourists_spot_name} This spot already exists in your list`
          ):toast.success(
            `${tourists_spot_data.tourists_spot_name} Added successfully`
          )
        );

      // form.reset()
    }
  };

  return (
    <div>
      <form className="grid gap-5" onSubmit={handleUploadForm}>
        <div className="md:flex justify-between">
          <TextInput
            type="text"
            id="disabledInput1"
            value={displayName}
            name="user_name"
            disabled
            readOnly
            className="md:w-[48%]"
          />
          <TextInput
            type="text"
            id="disabledInput2"
            value={email}
            name="user_email"
            disabled
            readOnly
            className="md:w-[48%]"
          />
        </div>
        <hr className="border-black" />
        <div className="md:flex justify-between">
          <div className="md:w-[48%]">
            <FloatingLabel
              name="tourists_spot_name"
              variant="outlined"
              label="Tourists Spot Name"
              required
            />
          </div>
          <div className="md:w-[48%]">
            <FloatingLabel
              name="country_Name"
              variant="outlined"
              label="Country Name (e.g. Indonesia)"
              required
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="md:grid md:grid-cols-2 md:gap-[4%]">
          <FloatingLabel
            name="average_cost"
            variant="outlined"
            label="Average Cost (in USD)"
            type="number"
            className=""
            required
          />
          <FloatingLabel
            name="seasonality"
            variant="outlined"
            label="Seasonality (e.g. Summer)"
            required
          />
          <FloatingLabel
            name="travel_time"
            variant="outlined"
            label="Travel Time (e.g. 7 days)"
            required
          />
          <FloatingLabel
            name="totalVisitorsPerYear"
            variant="outlined"
            label="Total Visitors Per Year"
            type="number"
            required
          />
        </div>
        <hr className="border-black" />
        <FloatingLabel
          name="image"
          variant="outlined"
          type="url"
          label="Photo Url"
          required
        />
        <FloatingLabel name="location" variant="outlined" label="Location" />
        <div className="relative">
          <textarea
            type="text"
            id="floatingLabel:rv:"
            aria-describedby="outlined_success_help"
            className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 h-auto resize-y overflow-hidden"
            placeholder=" "
            data-testid="floating-label"
            name="short_description"
          />
          <label
            htmlFor="floatingLabel:rv:"
            className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 h-auto"
          >
            Short Description
          </label>
        </div>
        <div className="relative">
          <textarea
            type="text"
            id="floatingLabel:rv:"
            aria-describedby="outlined_success_help"
            className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 h-auto resize-y overflow-hidden"
            placeholder=" "
            data-testid="floating-label"
            name="detailed_description"
          />
          <label
            htmlFor="floatingLabel:rv:"
            className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 transition-transform duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 h-auto"
          >
            Detailed Description
          </label>
        </div>
        <hr className="border-black" />
        <button className="text-left bg-sky-400 w-20 p-2 px-3 hover:bg-sky-700 rounded-lg">
          <input type="submit" value="Upload" />
        </button>
      </form>
    </div>
  );
};

SpotForm.propTypes = { isUpload: PropTypes.bool.isRequired };

export default SpotForm;
