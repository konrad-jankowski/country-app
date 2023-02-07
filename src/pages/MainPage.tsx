import { useState } from "react";
import data from "../../data.json";
import SearchAndFilter from "../components/SearchAndFilter";

function SingleCountry() {
  const [search, setSearch] = useState<string>("");

  console.log(search);

  return (
    <>
      <SearchAndFilter setSearch={setSearch} />
      <div className="grid grid-cols-4 gap-10 px-[9%] mt-10 text-white">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((country) => {
            return (
              <div className="flex flex-col bg-dark-blue rounded-lg overflow-hidden  h-[440px]	cursor-pointer">
                <div className="h-[220px]">
                  <img
                    className="h-full w-full object-cover"
                    src={country.flag}
                    alt=""
                  />
                </div>
                <div className="m-6 flex flex-col gap-2">
                  <h2 className="text-3xl font-bold">{country.name}</h2>
                  <p className="text-lg font-semibold">
                    Population:{" "}
                    <span className="font-medium">{country.population}</span>
                  </p>
                  <p className="text-lg font-semibold">
                    Region:{" "}
                    <span className="font-medium">{country.region}</span>{" "}
                  </p>
                  <p className="text-lg font-semibold">
                    Capital:{" "}
                    <span className="font-medium">{country.capital}</span>{" "}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SingleCountry;
