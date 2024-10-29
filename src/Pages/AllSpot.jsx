import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import SpotCart from "../Components/SpotCart";

const AllSpot = () => {
  const [countryName, setCountryName] = useState(null);
  const [spotData, setSpotData] = useState(null);
  const [sortBy, setSortBy] = useState("average_cost");
  const [sortByValue, setSortByValue] = useState(1);
  const [country, setCountry] = useState(" all");

  const takeCountriesNameFromDatabase = () => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/country`)
      .then((response) => response.json())
      .then((data) => setCountryName(data))
      .catch((error) => console.error("Error:", error));
  };

  const sortOptions = [
    "Average Cost",
    "Travel Time",
    "Total Visitors Per Year",
    "Tourists Spot Name",
  ];

  const sortOptionsValue = [
    "average_cost",
    "travel_time",
    "totalVisitorsPerYear",
    "tourists_spot_name",
  ];

  const handleFilter = () => {
    const form = document.getElementById("filterForm");

    const sortBy = form.sortBy.value;
    const sortByValue = form.sortByValue.value;
    const country = form.country.value;

    setSortBy(sortBy);
    setSortByValue(sortByValue);
    setCountry(country);
  };

  useEffect(() => takeCountriesNameFromDatabase, []);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_DATABASE_URL
      }/spot/${sortBy}/${sortByValue}/${country}`.replace(/\s+/g, "")
    )
      .then((response) => response.json())
      .then((data) => setSpotData(data))
      .catch((error) => console.error("Error:", error));
  }, [sortBy, sortByValue, country]);

  // console.log(spotData);
  // console.log(sortBy, sortByValue, country);
  console.log(
    `${
      import.meta.env.VITE_DATABASE_URL
    }/spot/${sortBy}/${sortByValue}/${country}`
  );

  if (!countryName) {
    return <p>Loading...</p>;
  }
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        All The Tourist Spots Added by Our User
      </h1>
      <div className="my-16">
        <form id="filterForm" onChange={handleFilter}>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-center font-semibold">
            <div className="flex gap-3 items-center">
              <label name="sortBy"> Sort By: </label>
              <Select name="sortBy" required>
                {sortOptions.map((option, i) => (
                  <option key={`sortBy${i}`} value={sortOptionsValue[i]}>
                    {option}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex gap-3 items-center">
              <label name="sortByValue"> Oder: </label>
              <Select name="sortByValue" required>
                <option value={"1"}>Ascending</option>
                <option value={"-1"}>Descending</option>
              </Select>
              <label name="country"> Country: </label>
              <Select name="country" required>
                <option value={"all"}>All Country</option>
                {countryName.map((country, i) => (
                  <option key={`country${i}`} value={country}>
                    {country}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div>
        {!spotData ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
              {spotData.map((spot) => (
                <SpotCart key={spot._id} touristsSpot={spot} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllSpot;
