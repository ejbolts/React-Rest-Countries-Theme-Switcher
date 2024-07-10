import React, { useState, useEffect, useRef } from "react";

export default function DropDownMenu({ region, setRegion, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState(region);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRegionClick = (region) => {
    if (activeRegion === region) {
      setActiveRegion("");
      setRegion("");
    } else {
      setActiveRegion(region);
      setRegion(region);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col" ref={dropdownRef}>
      <button
        className={`flex items-center shadow-md p-4 pl-6 gap-5 text-sm rounded ${
          darkMode
            ? "bg-darkModeElement text-white hover:bg-darkModeHover"
            : "bg-white text-lightModeText hover:bg-lightModeHover "
        }`}
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {activeRegion === "" ? "Filter by Region" : activeRegion}
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className={`flex flex-col shadow-md rounded mt-14  py-2 absolute z-10 ${
            darkMode
              ? "bg-darkModeElement text-white"
              : "bg-white text-slate-800"
          }`}
        >
          {regions.map((region) => (
            <button
              key={region}
              className={`text-left pl-6 py-1 pr-24 ${
                activeRegion === region
                  ? darkMode
                    ? "bg-darkModeHover text-white"
                    : "bg-lightModeHover text-lightModeText"
                  : darkMode
                  ? "bg-darkModeElement text-white hover:bg-darkModeHover"
                  : "bg-white text-lightModeText hover:bg-lightModeHover "
              }`}
              onClick={() => handleRegionClick(region)}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
