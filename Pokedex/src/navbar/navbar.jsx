import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import SearchPokemon from "./searchBar";
import Dropdown from "./dropDownMenu";

export const NavigationBar = () => {
  // State for controlling the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-display">
      {/* Navigation bar */}
      <nav className="bg-gray-800 px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"} className="text-2xl">
            Pokemon Database
          </Link>
          {/* Mobile menu toggle button */}
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="Toggle menu"
            >
              {/* Mobile menu icon */}
              <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current">
                {menuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 8h14v2H5V8zm0 5h14v2H5v-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop menu links */}
          <div className="hidden sm:flex space-x-4">
            <Link
              to={"/"}
              className="hover:text-gray-400 transition duration-300 ease-in-out text-2xl"
            >
              Home
            </Link>
            <Dropdown />
            <SearchPokemon />
          </div>
        </div>
        {/* Mobile menu links */}
        <div className={`sm:hidden ${menuOpen ? "block" : "hidden"} mt-2`}>
          <Link
            to={"/"}
            className="hover:text-gray-400 transition duration-300 ease-in-out text-2xl block mt-2"
          >
            Home
          </Link>
          <SearchPokemon />
        </div>
      </nav>
      {/* Main content */}
      <div className="container mx-auto p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default NavigationBar;
