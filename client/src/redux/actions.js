import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = () => {
    return async function (dispatch) {
        const response = await axios.get("http://localhost:5000/countries");
        return dispatch({
            type: GET_COUNTRIES,
            payload: response.data,
        });
    };
};