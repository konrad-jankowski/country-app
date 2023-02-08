import data from "../../data.json";
import { BsArrowLeftShort } from "react-icons/bs";
import { countryToAlpha2 } from "country-to-iso";

const essa = data[144];

function SingleCountry() {
  var getCountryNames = new Intl.DisplayNames(["en"], { type: "region" });
  return (
    <main className="dark:text-white px-[7%] mt-10">
      <button className="bg-white dark:bg-dark-blue py-1 px-8 shadow rounded text-sm mb-10 flex items-center gap-1">
        <BsArrowLeftShort size={18} /> Back
      </button>
      <div className="flex gap-20">
        <img
          className="w-[400px] h-[260px] object-cover"
          src={essa.flag}
          alt="flag"
        />

        <div>
          <h2 className="mb-6 text-2xl">{essa.name}</h2>
          <div className="flex flex-col">
            <div className="flex  gap-20">
              <div className="flex flex-col gap-1">
                <p>
                  Native name: <span>{essa.nativeName}</span>
                </p>
                <p>
                  Population: <span>{essa.population}</span>
                </p>
                <p>
                  Region: <span>{essa.region}</span>
                </p>
                <p>
                  Sub Region: <span>{essa.subregion}</span>
                </p>
                <p>
                  Capital: <span>{essa.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  Top Level Domain:: <span>{essa.topLevelDomain}</span>
                </p>
                <span className="flex gap-2">
                  <p>Currencies: </p>
                  {essa.currencies?.map((item, index) => {
                    return (
                      <span>
                        {item.name}
                        {index === essa.currencies.length - 1 ? null : ","}
                      </span>
                    );
                  })}
                </span>
                <span className="flex gap-2">
                  <p>Languages:</p>
                  {essa.languages.map((item, index) => {
                    return (
                      <span>
                        {item.name}{" "}
                        {index === essa.languages.length - 1 ? null : ","}
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-2 items-center">
            <p>
              {essa.borders
                ? "Border Countries:"
                : "Do not border with any country."}
            </p>
            {essa.borders?.map((item) => {
              const alpha3: any = countryToAlpha2(item);

              return (
                <span className="dark:bg-dark-blue bg-white text-sm px-3 py-1 rounded shadow cursor-pointer">
                  {getCountryNames.of(alpha3)}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleCountry;
function getISO3Country(arg0: string) {
  throw new Error("Function not implemented.");
}
