import data from "../../data.json";
import { BsArrowLeftShort } from "react-icons/bs";
import { countryToAlpha2 } from "country-to-iso";
import { useParams, Link, useNavigate } from "react-router-dom";

function SingleCountry() {
  const { alpha3Code } = useParams();
  const country = data.find((country) => country.alpha3Code == alpha3Code);

  const navigate = useNavigate();

  const getCountryNames = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <main className="dark:text-white px-[7%] mt-10">
      <Link to="/">
        <button className="bg-white dark:bg-dark-blue py-1 px-8 shadow rounded text-sm mb-10 flex items-center gap-1">
          <BsArrowLeftShort size={18} /> Back
        </button>
      </Link>
      <div className="flex gap-20">
        <img
          className="w-[400px] h-[260px] object-cover shadow-md"
          src={country?.flag}
          alt="flag"
        />

        <div>
          <h2 className="mb-6 text-2xl">{country?.name}</h2>
          <div className="flex flex-col">
            <div className="flex  gap-20">
              <div className="flex flex-col gap-1">
                <p>
                  Native name: <span>{country?.nativeName}</span>
                </p>
                <p>
                  Population: <span>{country?.population}</span>
                </p>
                <p>
                  Region: <span>{country?.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country?.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country?.capital}</span>
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p>
                  Top Level Domain:: <span>{country?.topLevelDomain}</span>
                </p>
                <span className="flex gap-2">
                  <p>Currencies: </p>
                  {country?.currencies?.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.name}
                        {index === country?.currencies.length - 1 ? null : ","}
                      </span>
                    );
                  })}
                </span>
                <span className="flex gap-2">
                  <p>Languages:</p>
                  {country?.languages.map((item, index) => {
                    return (
                      <span key={index}>
                        {item.name}{" "}
                        {index === country?.languages.length - 1 ? null : ","}
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-3 items-center">
            <p>
              {country?.borders
                ? "Border Countries:"
                : "Do not border with any country."}
            </p>
            <div className="flex flex-wrap gap-3">
              {country?.borders?.map((item, index) => {
                let alpha3 = countryToAlpha2(item);

                if (alpha3 !== null) {
                  getCountryNames.of(alpha3);
                  return (
                    <span
                      onClick={() => navigate(`/${item}`)}
                      key={index}
                      className="dark:bg-dark-blue bg-white text-sm px-3 py-1 rounded shadow cursor-pointer dark:hover:bg-white/20 hover:bg-dark-blue/20"
                    >
                      {getCountryNames.of(alpha3)}
                    </span>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SingleCountry;
