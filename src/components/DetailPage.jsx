import React from "react";

export default function DetailPage() {
  //WIP
  const country = useLoaderData();
  return (
    <div>
      <div className="flex flex-col">
        <div className="relative h-40">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-t-md"
            src={country.flag}
            alt={`${country.name} flag`}
          />
        </div>
        <div className="flex flex-col  bg-white p-6 shadow-md rounded-b-md">
          <h2 className="font-bold pb-2">{country.name}</h2>
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
    </div>
  );
}
export const fetchCountryDetails = async ({ params }) => {
  const { countryName } = params;
  const response = await fetch(`/data.json`); // Assuming the data is in a local JSON file
  const countries = await response.json();
  const country = countries.find((c) => c.name === countryName);
  return country;
};
