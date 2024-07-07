import React from "react";
import DropDownMenu from "./DropDownMenu";

export default function CountrySearchFilter({ region, setRegion }) {
  return (
    <div className="flex justify-between p-10 px-16  ">
      <div className="flex shadow-md p-4 rounded items-center">
        <svg
          className="mx-3 mr-5 text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
        <input
          className="text-sm min-w-96"
          type="text"
          placeholder="Search for a country..."
        />
      </div>

      <DropDownMenu region={region} setRegion={setRegion} />
    </div>
  );
}
