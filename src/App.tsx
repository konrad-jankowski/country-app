import data from "../data.json";

function App() {
  return (
    <div className="grid grid-cols-4 gap-10 px-[10%] mt-10">
      {data.slice(0, 8).map((country) => {
        return (
          <div className="flex flex-col bg-gray-800">
            <div className="h-[150px] w-full">
              <img
                className="h-full w-full object-cover"
                src={country.flag}
                alt=""
              />
            </div>
            <div>
              <h2>{country.name}</h2>
              <p>Population:{country.population}</p>
              <p>Region:{country.region} </p>
              <p>Capital:{country.capital} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
