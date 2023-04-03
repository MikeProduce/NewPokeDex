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
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute text-gray-700 pt-3 bottom-100 rounded`}
        >
          {pokemonTypes.map((type) => (
            <ul key={type} className="">
              <li className="px-2 py-1 text-md font-semibold bg-gray-200 text-gray-900 w-32 hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out">
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
