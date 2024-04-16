import axios from "axios";
import {
    GET_COUNTRIES,
    SEARCH_COUNTRIES,
    SORT_COUNTRIES,
    FILTER_COUNTRIES,
    RESET_COUNTRIES_LIST,
} from "../constants";

export const getCountries = () => {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/countries");
        dispatch({
            type: GET_COUNTRIES,
            payload: response.data,
        });
    };
};

export const searchCountries = (searchTerm) => {
    return async function (dispatch) {
        const response = await axios.get(
            `http://localhost:3001/countries?name=${searchTerm}`
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

export const filterCountries = (filteredCountries) => ({
    type: FILTER_COUNTRIES,
    payload: filteredCountries,
});

export const resetCountriesList = (countries) => ({
    type: RESET_COUNTRIES_LIST,
    payload: countries,
});