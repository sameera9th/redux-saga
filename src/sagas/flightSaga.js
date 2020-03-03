import { takeEvery, put } from 'redux-saga/effects';

import { ACTIONS, FLIGHTS } from '../store/types/flight';

function* handleBusinessFlights() {
    console.log('fetching images from unsplash');
}

export default function* loadBusinessFlights() {
    yield takeEvery(FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FETCHING, handleBusinessFlights);
}