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
          } absolute text-gray-700 pt-1 bottom-100`}
        >
          {pokemonTypes.map((type) => (
            <ul key={type} className="py-1">
              <li className="px-2 py-1 text-sm font-semibold bg-gray-200 text-gray-800">
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
