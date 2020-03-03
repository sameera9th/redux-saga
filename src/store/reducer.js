import {combineReducers} from 'redux'

import * as flightReducer from './reducers/flight'

const appReducer = combineReducers({
    flight: flightReducer.flight
})

const rootReducer = (state, action) =>
{
    console.log('state ', state);
    return appReducer(state, action)
}

export default rootReducer
