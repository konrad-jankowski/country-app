import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Lol {
  selected: string;
  setSearch: (e: string) => void;
  setSelected: (item: string) => void;
}

function SearchAndFilter({ setSearch, selected, setSelected }: Lol) {
  const [toggle, setToggle] = useState(false);

  const countries = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="px-[7%] my-10 flex justify-between">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white shadow-md dark:bg-dark-blue text-text-lm dark:text-white rounded-md w-[800px] pl-6"
        type="search"
        placeholder="Search for country"
      />
      <div>
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="bg-white shadow-md dark:bg-dark-blue text-text-lm dark:text-white min-w-[190px] py-3 px-5 flex items-center gap-4 justify-between rounded-md cursor-pointer relative"
        >
          {selected ? selected : "Filter by Region"}
          {toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}

          <ul
            onClick={() => setToggle(true)}
            className={`bg-white shadow-md dark:bg-dark-blue rounded w-full absolute top-14 left-0 ${
              toggle ? null : "hidden"
            }`}
          >
            {countries.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  if (item !== selected) {
                    setSelected(item);
                  }
                }}
                className="pl-4 pt-2 pb-1  cursor-pointer "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SearchAndFilter;
