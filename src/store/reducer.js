import {combineReducers} from 'redux'

import * as flightReducer from './reducers/flight'

const appReducer = combineReducers({
    flight: flightReducer.flights
})

const rootReducer = (state, action) =>
{
    if(action.type === 'LOGOUT')
    {
        state = {
            flight: flightReducer.initialState,
        }
    }

    return appReducer(state, action)
}

export default rootReducer
