import { ACTIONS, FLIGHTS } from '../types/flight';

const fetchBusinessFLights = () => ({
    type: FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FETCHING
});

const setBusinessFLights = flights => ({
    type: FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.SUCCESS,
    data: flights
});

const setBusinessError = error => ({
    type: FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FAILURE,
    error
});

const fetchCheapFLights = () => ({
    type: FLIGHTS.CHEAP_FLIGHTS + ACTIONS.FETCHING
});

const setCheapFLights = flights => ({
    type: FLIGHTS.CHEAP_FLIGHTS + ACTIONS.SUCCESS,
    data: flights
});

const setCheapError = error => ({
    type: FLIGHTS.CHEAP_FLIGHTS + ACTIONS.FAILURE,
    error
});

export {
    fetchBusinessFLights,
    setBusinessFLights,
    setBusinessError,
    fetchCheapFLights,
    setCheapFLights,
    setCheapError
}