import { filterCountries } from "./redux/actions";

export const formatPopulation = (population) => {
    if (population >= 1000000) {
        return (population / 1000000).toFixed(1) + " M";
    } else if (population >= 1000) {
        return (population / 1000).toFixed(1) + " K";
    } else {
        return population;
    }
};

export const formatArea = (area) => {
    return area.toLocaleString() + " m²";
};

export const filterCountriesByContinent = (dispatch, countries, continent) => {
    // Filtrar los países que pertenecen al continente especificado
    const filteredCountries = countries.filter((country) =>
        country.continents.includes(continent)
    );

    // Despachar la acción para actualizar el estado con los países filtrados
    dispatch(filterCountries(filteredCountries));
};