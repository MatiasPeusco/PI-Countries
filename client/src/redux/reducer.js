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

const initialState = {
    activities: [],
    countries: [],
    allCountries: [],
    error: {
        errorMessage: null,
        code: null,
        status: null,
    },
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
        case SORT_COUNTRIES_Z_A:
            return {
                ...state,
                countries: action.payload,
            };
        case SORT_BY_POPULATION_ASC:
            return {
                ...state,
                countries: action.payload,
            };
        case SORT_BY_POPULATION_DESC:
            return {
                ...state,
                countries: action.payload,
            };
        case FILTER_COUNTRIES_BY_CONTINENT:
            return {
                ...state,
                countries: action.payload,
            };
        case RESET_COUNTRIES_LIST:
            return {
                ...state,
                countries: action.payload,
            };
        case CREATE_ACTIVITY_SUCCESS:
            console.log(action.payload.statusText);
            return {
                ...state,
                error: {
                    errorMessage: action.payload.statusText,
                    status: action.payload.status,
                },
            };
        case CREATE_ACTIVITY_FAILURE:
            console.log(action.payload.errorMessage);
            return {
                ...state,
                error: {
                    errorMessage: action.payload.errorMessage,
                    code: action.payload.code,
                    status: action.payload.response.status,
                },
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };
        default:
            return state;
    }
}

export default rootReducer;