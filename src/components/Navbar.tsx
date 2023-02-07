function Navbar() {
  return (
    <nav className="bg-dark-blue text-white px-[9%] py-4 shadow shadow-very-dark-blue">
      <ul className="flex justify-between items-center">
        <li className="text-3xl font-semibold">
          <h1>Where is the world?</h1>
        </li>
        <li className="text-xl">Dark Mode</li>
      </ul>
    </nav>
  );
}

export default Navbar;
