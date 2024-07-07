import React, { useState } from "react";
export default function DropDownMenu({ region, setRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="flex flex-col">
      <button
        className="flex items-center shadow-md p-4 pl-6 gap-5 text-sm rounded text-slate-800"
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {region}
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
        <div className="flex flex-col">
          {regions.map((region) => {
            return <button key={region}>{region}</button>;
          })}
        </div>
      )}
    </div>
  );
}
