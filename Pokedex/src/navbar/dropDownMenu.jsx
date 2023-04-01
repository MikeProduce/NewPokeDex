import { useState } from "react";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pokemonTypes = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          type="button"
          className="hover:text-gray-400 transition duration-300 ease-in-out text-2xl rounded inline-flex items-center"
        >
          <span className="mr-2">Type</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute text-gray-700 pt-1`}
        >
          {pokemonTypes.map((type) => (
            <ul key={type} className="py-1">
              <li className="px-2 py-1 rounded-full text-sm font-semibold bg-gray-200 text-gray-800">
                {type}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
