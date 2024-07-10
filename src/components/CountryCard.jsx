import React, { useContext } from "react";
import { CountryContext } from "../CountryContext";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  const { darkMode } = useContext(CountryContext);

  return (
    <Link to={`detailPage/${country.name}`}>
      <div
        className={`flex flex-col rounded-md ${
          darkMode
            ? "bg-darkModeElement text-white hover:bg-darkModeHover"
            : "bg-white text-lightModeText hover:bg-lightModeHover "
        }`}
      >
        <div className="relative h-40">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-t-md"
            src={country.flag}
            alt={`${country.name} flag`}
          />
        </div>
        <div className={`flex flex-col p-6 shadow-md rounded-b-md `}>
          <h2 className="font-bold pb-2 text-lg">{country.name}</h2>
          <div>
            <span className="font-bold text-sm">Population: </span>
            <span className="text-sm">
              {country.population.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="font-bold text-sm">Region: </span>
            <span className="text-sm">{country.region}</span>
          </div>
          <div>
            <span className="font-bold text-sm">Capital: </span>
            <span className="text-sm">{country.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
