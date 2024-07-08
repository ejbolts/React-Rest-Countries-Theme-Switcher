import { createContext, useEffect, useState } from "react";
import { extractBorderCountries } from "./util/countryBorderFinder";
export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryNameSearch, setCountryNameSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function fetchCountryData() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        const countryDetails = data.map((country) => ({
          name: country.name,
          flag: country.flags.png,
          region: country.region,
          population: country.population,
          capital: country.capital,
          nativeName: country.nativeName,
          subregion: country.subregion,
          topLevelDomain: country.topLevelDomain,
          currencies: country.currencies,
          languages: country.languages,
          alpha3Code: country.alpha3Code,
          borders: country.borders || [],
        }));

        const countriesWithBorderNames = extractBorderCountries(countryDetails);

        console.log(countriesWithBorderNames);
        setCountries(countriesWithBorderNames);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCountryData();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        region,
        setRegion,
        countries,
        setCountries,
        countryNameSearch,
        setCountryNameSearch,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
