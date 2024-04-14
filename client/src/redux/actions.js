import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SORT_COUNTRIES_A_TO_Z = "SORT_COUNTRIES_A_TO_Z";

export const getCountries = () => {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:5000/countries");
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data,
        });
    };
};

export const searchCountries = (searchTerm) => {
    return async function (dispatch) {
        const response = await axios.get(
            `http://localhost:5000/countries?search=${searchTerm}`
        );
        dispatch({
            type: SEARCH_COUNTRIES,
            payload: response.data,
        });
    };
};

export const sortCountriesAToZ = (sortedCountries) => ({
    type: SORT_COUNTRIES_A_TO_Z,
    payload: sortedCountries,
});