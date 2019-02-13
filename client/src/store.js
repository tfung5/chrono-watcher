import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootEnhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

/** The following setup of the Redux Devtools extension causes the app to not load when the extension is not installed in the browser, at least when deployed on Heroku. The above is the workaround.

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
    rootEnhancer
)


export default store;