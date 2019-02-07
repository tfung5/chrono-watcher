import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

const rootEnhancer = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension()
);

/**
 * 
 * const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE ?
        window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE({
            // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
 */

const store = createStore(
    rootReducer,
    initialState,
    enhancer
)


export default store;