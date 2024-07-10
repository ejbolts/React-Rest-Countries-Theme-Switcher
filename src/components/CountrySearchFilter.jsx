import React, { useContext, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import { CountryContext } from "../CountryContext";

export default function CountrySearchFilter() {
  const {
    region,
    setRegion,
    countryNameSearch,
    setCountryNameSearch,
    darkMode,
  } = useContext(CountryContext);

  return (
    <div className="flex justify-between p-10 px-16 max-sm:flex-wrap ">
      <div
        className={`flex shadow-md rounded items-center max-sm:mb-10  ${
          darkMode
            ? "bg-darkModeElement text-white"
            : " bg-white text-lightModeText  "
        }`}
      >
        <svg
          className="ml-6 mr-1  text-gray-400"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
        <input
          className={`text-sm min-w-96  max-md:min-w-80 max-sm:min-w-64 rounded  p-4 ${
            darkMode
              ? "bg-darkModeElement text-white"
              : "bg-white text-lightModeText  "
          }`}
          type="text"
          placeholder="Search for a country..."
          value={countryNameSearch}
          onChange={(e) => setCountryNameSearch(e.target.value)}
        />
      </div>

      <DropDownMenu region={region} setRegion={setRegion} darkMode={darkMode} />
    </div>
  );
}
