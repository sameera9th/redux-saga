import {ACTIONS, FLIGHTS} from '../types/flight';

export const initialState = {
    business: [],
    cheap: [],
    action: null,
    error: null
};

export const flights = (state = initialState, action) =>
{
    switch(action.type)
    {
        case FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FETCHING:
            return {
                ...state,
                action: action.type
            };
        case FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.SUCCESS:
            return {
                ...state,
                action: action.type,
                business: action.data
            };
        case FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FAILURE:
            return {
                ...state,
                action: action.type,
                error: action.error
            };
    }
}