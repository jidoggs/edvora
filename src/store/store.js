import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/reducer";

let middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// if (process.env.NODE_ENV === `development`) {
//     const { logger } = require(`redux-logger`);

//     middlewares.push(logger);
// }

const store = createStore(reducers, {}, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;
