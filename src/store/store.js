import { applyMiddleware , createStore } from 'redux';
//import {createLogger} from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducer.js';

const middleware = applyMiddleware(promise(),thunk);

/*, createLogger()*/

// export default createStore(reducer, composeWithDevTools(middleware)); // development

const store = createStore(reducer, middleware); // production

export default store;