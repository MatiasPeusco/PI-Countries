import { sortCountriesAToZ } from "./redux/actions";

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

export const sortCountriesAZ = (dispatch, countries) => {
    const sortedCountries = [...countries].sort((a, b) => {
        const countryA = a.name.common.toUpperCase();
        const countryB = b.name.common.toUpperCase();
        if (countryA < countryB) {
            return -1;
        }
        if (countryA > countryB) {
            return 1;
        }
        return 0;
    });

    // Despachar la acción para actualizar el estado con el nuevo array ordenado
    dispatch(sortCountriesAToZ(sortedCountries));
};