import React, { useContext } from "react";
import { CountryContext } from "../CountryContext";
import CountryCard from "./CountryCard";
import CountrySearchFilter from "./CountrySearchFilter";

export default function CountryList() {
  const { countries, countryNameSearch, region } = useContext(CountryContext);
  const defaultCountries = [
    "Germany",
    "United States of America",
    "Brazil",
    "Iceland",
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
  ];

  // Filter countries based on the search term and region
  let filteredCountries = countries
    .filter((country) => {
      return (
        countryNameSearch === "" ||
        country.name.toLowerCase().startsWith(countryNameSearch.toLowerCase())
      );
    })
    .filter((country) => {
      return region === "" || country.region === region;
    });

  // If the search term and region is empty, use the default set of countries and maintain the order
  if (countryNameSearch === "" && region === "") {
    filteredCountries = countries
      .filter((country) => defaultCountries.includes(country.name))
      .sort(
        (a, b) =>
          defaultCountries.indexOf(a.name) - defaultCountries.indexOf(b.name)
      );
  }
  // Limit to the first 8 countries to fit example
  filteredCountries = filteredCountries.slice(0, 8);
  return (
    <>
      <CountrySearchFilter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5  gap-14 px-16">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </>
  );
}
