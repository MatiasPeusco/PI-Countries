import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const SORT_COUNTRIES = "SORT_COUNTRIES";

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

export const sortCountries = (sortedCountries) => ({
    type: SORT_COUNTRIES,
    payload: sortedCountries,
});