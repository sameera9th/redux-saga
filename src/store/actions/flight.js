import {ACTIONS, FLIGHTS} from '../types/flights';

const fetchBusinessFLights = () => ({
    type: FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FETCHING
});

const setBusinessFLights = flights => ({
    type: FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.SUCCESS,
    data: flights
});

const setError = error => ({
    type: FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FAILURE,
    error
});

export {
    fetchBusinessFLights,
    setBusinessFLights,
    setError
}