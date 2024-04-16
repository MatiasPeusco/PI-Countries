import axios from "axios";
import {
    GET_COUNTRIES,
    SEARCH_COUNTRIES,
    SORT_COUNTRIES_Z_A,
    SORT_BY_POPULATION_ASC,
    SORT_BY_POPULATION_DESC,
    FILTER_COUNTRIES_BY_CONTINENT,
    RESET_COUNTRIES_LIST,
    CREATE_ACTIVITY_SUCCESS,
    CREATE_ACTIVITY_FAILURE,
    GET_ACTIVITIES,
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

export const sortCountriesZA = () => {
    return async function (dispatch) {
        const response = await axios.get(
            "http://localhost:3001/countries?orderBy=DESC"
        );
        dispatch({
            type: SORT_COUNTRIES_Z_A,
            payload: response.data,
        });
    };
};

export const sortByPopulationAsc = () => {
    {
        return async function (dispatch) {
            const response = await axios.get(
                "http://localhost:3001/countries?sortBy=population"
            );
            dispatch({
                type: SORT_BY_POPULATION_ASC,
                payload: response.data,
            });
        };
    }
};

export const sortByPopulationDesc = () => {
    {
        return async function (dispatch) {
            const response = await axios.get(
                "http://localhost:3001/countries?sortBy=population&orderBy=DESC"
            );
            dispatch({
                type: SORT_BY_POPULATION_DESC,
                payload: response.data,
            });
        };
    }
};

export const filterCountriesByContinent = (continent) => {
    return async function (dispatch) {
        const response = await axios.get(
            `http://localhost:3001/countries?continent=${continent}`
        );
        dispatch({
            type: FILTER_COUNTRIES_BY_CONTINENT,
            payload: response.data,
        });
    };
};

export const resetCountriesList = (countries) => ({
    type: RESET_COUNTRIES_LIST,
    payload: countries,
});

export const createActivity = (newActivity) => {
    return async function (dispatch) {
        try {
            const response = await axios.post(
                "http://localhost:3001/activities",
                newActivity
            );
            dispatch({ type: CREATE_ACTIVITY_SUCCESS, payload: response });
        } catch (error) {
            dispatch({ type: CREATE_ACTIVITY_FAILURE, payload: error });
        }
    };
};

export const getActivities = () => {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/activities");
        dispatch({
            type: GET_ACTIVITIES,
            payload: response.data,
        });
    };
};