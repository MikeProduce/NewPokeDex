import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen text-white font-display">
      <nav className="bg-gray-800 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            Pokemon Database
          </a>
          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="Toggle menu"
            >
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
          <div className="hidden sm:flex space-x-4">
            <a href="/" className="hover:text-gray-400 transition duration-300 ease-in-out">
              Home
            </a>
            <a href="/about" className="hover:text-gray-400 transition duration-300 ease-in-out">
              About
            </a>
            <a href="/contact" className="hover:text-gray-400 transition duration-300 ease-in-out">
              Contact
            </a>
          </div>
        </div>
        <div className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}>
          <a href="/" className="block px-4 py-2 text-gray-500 hover:text-gray-400 transition duration-300 ease-in-out">
            Home
          </a>
          <a href="/about" className="block px-4 py-2 text-gray-500 hover:text-gray-400 transition duration-300 ease-in-out">
            About
          </a>
          <a href="/contact" className="block px-4 py-2 text-gray-500 hover:text-gray-400 transition duration-300 ease-in-out">
            Contact
          </a>
        </div>
      </nav>
      <div className="container mx-auto p-10">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

