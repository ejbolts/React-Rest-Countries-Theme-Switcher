import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { extractBorderCountries } from "../util/countryBorderFinder";
import { CountryContext } from "../CountryContext";

export default function DetailPage() {
  const { darkMode } = useContext(CountryContext);
  const country = useLoaderData();
  return (
    <div className="mt-6">
      <div className="flex flex-col">
        <Link
          className={`flex items-center justify-center p-2 shadow-md m-6 mx-16 pr-5 w-32 h-10 rounded  ${
            darkMode
              ? "bg-darkModeElement text-white hover:bg-darkModeHover"
              : "bg-white text-lightModeText hover:bg-lightModeHover "
          }`}
          to={".."}
        >
          <svg
            width="32"
            height="18"
            viewBox="0 0 512 512"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z"
              fill={`${darkMode ? "white" : "black"}`}
            />
          </svg>
          <span>Back</span>
        </Link>
        <div className="flex items-center justify-start gap-12 lg:gap-16 my-8 mx-16 flex-wrap md:flex-nowrap">
          <div className="min-w-64 w-auto h-auto">
            <img
              className="object-cover w-full max-h-80"
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div
            className={`flex flex-col justify-between p-0 max-w-full md:max-w-xl md:p-8 ${
              darkMode ? "text-white" : "text-lightModeText"
            }`}
          >
            <h2 className="font-extrabold text-2xl pb-2">{country.name}</h2>
            <div className="flex md:justify-between flex-wrap">
              <div>
                <div className="my-1">
                  <span className="font-bold text-sm">Native Name: </span>
                  <span className="text-sm">{country.nativeName}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold text-sm">Population: </span>
                  <span className="text-sm">
                    {country.population.toLocaleString()}
                  </span>
                </div>
                <div className="my-1">
                  <span className="font-bold text-sm">Region: </span>
                  <span className="text-sm">{country.region}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold text-sm">Sub Region: </span>
                  <span className="text-sm">{country.subregion}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold text-sm">Capital: </span>
                  <span className="text-sm">{country.capital}</span>
                </div>
              </div>
              <div>
                <div className="my-1">
                  <span className="font-bold text-sm">Top Level Domain: </span>
                  <span className="text-sm">{country.topLevelDomain}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold text-sm">Currencies: </span>
                  <span className="text-sm">{country.currencies[0].name}</span>
                </div>
                <div className="my-1">
                  <span className="font-bold text-sm">Languages: </span>
                  {country.languages.map((language, index) => {
                    const isLast = index === country.languages.length - 1;
                    return (
                      <span key={language.name} className="text-sm">
                        {language.name}
                        {!isLast && ", "}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center max-lg:flex-wrap">
              <span className="font-bold text-sm mr-3">Border Countries: </span>
              <div className="flex flex-wrap">
                {country.borderCountries.map((borderCountry) => {
                  return (
                    <Link
                      className={`shadow-md p-1 px-6 m-1 rounded ${
                        darkMode
                          ? "bg-darkModeElement text-white hover:bg-darkModeHover"
                          : "bg-white text-lightModeText hover:bg-lightModeHover"
                      }`}
                      to={`/detailPage/${borderCountry}`}
                      key={borderCountry}
                    >
                      {borderCountry}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const fetchCountryDetails = async ({ params }) => {
  const { countryName } = params;
  const response = await fetch(`/data.json`);
  const countries = await response.json();
  const countriesWithBorderNames = extractBorderCountries(countries);

  const country = countriesWithBorderNames.find((c) => c.name === countryName);
  return country;
};
