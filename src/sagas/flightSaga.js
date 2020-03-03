import { takeEvery, call, put } from 'redux-saga/effects';

import { ACTIONS, FLIGHTS, FLIGHT_TYPES } from '../store/types/flight';

import {
    getFlights
} from '../api/flights';
import {
    setBusinessFLights,
    setBusinessError,
    // setCheapFLights,
    // setCheapError
} from '../store/actions/flight';

function* handleLoadBusinessFlights() {
    try {
        const flights = yield call(getFlights, FLIGHT_TYPES.CHEAP);
        yield put(setBusinessFLights(flights));

    } catch (ex) {
        yield put(setBusinessError(ex.toString()));
    }
}

export default function* loadBusinessFlights() {
    yield takeEvery(FLIGHTS.BUSINESS_FLIGHTS + ACTIONS.FETCHING, handleLoadBusinessFlights);
}

// function* handleLoadCheapFlights() {
//     try {
//         const flights = yield call(getFlights(FLIGHT_TYPES.CHEAP));
//         yield put(setCheapFLights(flights));

//     } catch (ex) {
//         yield put(setCheapError(ex.toString()));
//     }
// }

// export default function* loadCheaplights() {
//     yield takeEvery(FLIGHTS.CHEAP_FLIGHTS + ACTIONS.FETCHING, handleLoadCheapFlights);
// }