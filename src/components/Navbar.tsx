import { MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="bg-white dark:bg-dark-blue text-text-lm dark:text-white px-[7%] py-4 shadow-md">
      <ul className="flex justify-between items-center">
        <Link to="/" className="text-3xl font-semibold">
          <h1>Where is the world?</h1>
        </Link>
        <li
          onClick={handleThemeSwitch}
          className="flex items-center gap-1 text-[17px] cursor-pointer select-none"
        >
          <MdOutlineDarkMode className="rotate-[20deg]" size={20} /> Dark Mode
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
