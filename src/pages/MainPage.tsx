import { useState } from "react";
import data from "../../data.json";
import SearchAndFilter from "../components/SearchAndFilter";

function SingleCountry() {
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  const keys: string[] = [
    "name",
    "capital",
    "region",
    "nativeName",
    "subregion",
  ];

  return (
    <>
      <SearchAndFilter
        setSearch={setSearch}
        selected={selected}
        setSelected={setSelected}
      />
      <div className="grid grid-cols-4 gap-10 px-[7%] my-10 text-text-lm dark:text-white">
        {data
          .filter((item) => {
            return keys.some((key) =>
              item[key]?.toLowerCase().includes(search)
            );
          })
          .filter((item) =>
            item.region.toLowerCase().includes(selected.toLowerCase())
          )
          .map((country) => {
            return (
              <div className=" bg-white dark:bg-dark-blue rounded-lg overflow-hidden h-[340px]	cursor-pointer shadow-lg">
                <div className="h-[170px]">
                  <img
                    className="h-full w-full object-cover"
                    src={country.flag}
                    alt={country.name}
                  />
                </div>
                <div className="h-[170px] m-6 flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">
                    {country.name.slice(0, 15)}
                  </h2>
                  <p className="text-md font-semibold">
                    Population:{" "}
                    <span className="font-medium">{country.population}</span>
                  </p>
                  <p className="text-md font-semibold">
                    Region:{" "}
                    <span className="font-medium">{country.region}</span>{" "}
                  </p>
                  <p className="text-md font-semibold">
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
