export const extractBorderCountries = (countries) => {
    // Create a lookup object to map country codes to country names
    const countryCodeToNameMap = countries.reduce((acc, country) => {
        acc[country.alpha3Code] = country.name;
        return acc;
    }, {});

    // Map over the countries to create a new array with border countries
    const countriesWithBorders = countries.map((country) => {
        const borderCountryNames = country.borders.map((borderCode) => {
            return countryCodeToNameMap[borderCode] || borderCode;
        });

        return {
            ...country,
            borderCountries: borderCountryNames
        };
    });

    return countriesWithBorders;
};