import {
    GET_COUNTRIES,
    SEARCH_COUNTRIES,
    SORT_COUNTRIES,
    FILTER_COUNTRIES,
    RESET_COUNTRIES_LIST,
} from "../constants";

const initialState = {
    countries: [],
    allCountries: [],
};

// Reducer principal que maneja las acciones y actualiza el estado en consecuencia
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload,
            };
        case SEARCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case SORT_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case FILTER_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            };
        case RESET_COUNTRIES_LIST:
            return {
                ...state,
                countries: action.payload,
            };
        default:
            return state;
    }
}

export default rootReducer;