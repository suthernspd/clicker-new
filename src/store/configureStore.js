import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/main';
import woodReducer from '../reducers/wood';
import goldReducer from '../reducers/gold';
import foodReducer from '../reducers/food';
import authReducer from '../reducers/auth';

// Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            main: mainReducer,
            wood: woodReducer,
            gold: goldReducer,
            food: foodReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};