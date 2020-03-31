import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ancedoteReducer from './reducers/ancedoteReducer';
import thunk from 'redux-thunk';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const combinedReducers = combineReducers({
    ancedotes: ancedoteReducer,
    notification: notificationReducer,
    filter: filterReducer
});

const store = createStore(combinedReducers,composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;