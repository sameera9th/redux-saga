import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer.js';
import rootSaga from '../sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
        ),
    );

    sagaMiddleware.run(rootSaga)
    return store;
}

/*, createLogger()*/

// export default createStore(reducer, composeWithDevTools(middleware)); // development

export default configureStore;