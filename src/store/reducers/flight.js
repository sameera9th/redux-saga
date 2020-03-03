import { ACTIONS, FLIGHTS } from '../types/flight';

export const initialState = {
    business: [],
    cheap: [],
    action: null,
    error: null,
    fetching: false
};

export const flight = (state = initialState, action) => {
    switch (action.type) {
        case FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FETCHING:
            return {
                ...state,
                action: action.type,
                fetching: true
            };
        case FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.SUCCESS:
            return {
                ...state,
                action: action.type,
                business: action.data,
                fetching: false
            };
        case FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FAILURE:
            return {
                ...state,
                action: action.type,
                error: action.error,
                fetching: false
            };
        // case FLIGHTS.CHEAP_FLIGHTS + ACTIONS.FETCHING:
        //     return {
        //         ...state,
        //         action: action.type,
        //         fetching: true
        //     };
        // case FLIGHTS.CHEAP_FLIGHTS + ACTIONS.SUCCESS:
        //     return {
        //         ...state,
        //         action: action.type,
        //         cheap: action.data,
        //         fetching: false
        //     };
        // case FLIGHTS.CHEAP_FLIGHTS + ACTIONS.FAILURE:
        //     return {
        //         ...state,
        //         action: action.type,
        //         error: action.error,
        //         fetching: false
        //     };
        default:
            return state;
    }
}