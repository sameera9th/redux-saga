import { takeEvery, call, put } from 'redux-saga/effects';

import { ACTIONS, FLIGHTS } from '../store/types/flight';

import { getBusinessFlights } from '../api/flights';
import { setBusinessFLights, setBusinessError } from '../store/actions/flight';

function* handleLoadBusinessFlights() {
    console.log('fetching images from unsplash');
    try {
        const flights = yield call(getBusinessFlights);
        yield put(setBusinessFLights(flights));
        
    } catch (ex) {
        yield put(setBusinessError(ex.toString()));
    }
}

export default function* loadBusinessFlights() {
    yield takeEvery(FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FETCHING, handleLoadBusinessFlights);
}