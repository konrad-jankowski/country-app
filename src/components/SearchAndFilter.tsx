function SearchAndFilter({ setSearch }) {
  return (
    <div className="px-[9%] my-10 flex justify-between text-white">
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-dark-blue rounded-md w-[800px] pl-6"
        type="search"
        placeholder="Search for country"
      />
      <div className="bg-dark-blue py-3 px-5 rounded-md">Filter by Region</div>
    </div>
  );
}
export default SearchAndFilter;
