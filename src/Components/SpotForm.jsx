import { FloatingLabel, TextInput } from "flowbite-react";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import { useContext } from "react";

const SpotForm = ({ isUpload }) => {
  const { user } = useContext(RegistrationContext);
  if (!user) {
    return <p>loading</p>;
  }
  const { email, displayName } = user;

  return (
    <div>
      <form className="grid gap-5">
        <div className="md:flex justify-between">
          <TextInput
            type="text"
            id="disabledInput1"
            placeholder={displayName}
            disabled
            readOnly
            className="md:w-[48%]"
          />
          <TextInput
            type="text"
            id="disabledInput2"
            placeholder={email}
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
            />
          </div>
          <div className="md:w-[48%]">
            <FloatingLabel
              name="country_Name"
              variant="outlined"
              label="Country Name"
            />
          </div>
        </div>
        <hr className="border-black" />
        <div className="md:grid md:grid-cols-2 md:gap-[4%]">
          <FloatingLabel
            name="Place_Name"
            variant="outlined"
            label="Average Cost"
          />
          <FloatingLabel
            name="Place_Name"
            variant="outlined"
            label="Seasonality"
          />
          <FloatingLabel
            name="Place_Name"
            variant="outlined"
            label="Travel Time"
          />
          <FloatingLabel
            name="Place_Name"
            variant="outlined"
            label="Total Visitors Per Year"
          />
        </div>
        <hr className="border-black" />
        <FloatingLabel
          name="Place_Name"
          variant="outlined"
          type="url"
          label="Photo Url"
        />
        <FloatingLabel name="Place_Name" variant="outlined" label="Location" />
        <div className="relative">
          <textarea
            type="text"
            id="floatingLabel:rv:"
            aria-describedby="outlined_success_help"
            className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 h-auto resize-y overflow-hidden"
            placeholder=" "
            data-testid="floating-label"
            name="Place_Name"
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
            name="Place_Name"
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

SpotForm.propTypes = {isUpload: Prop};

export default SpotForm;
