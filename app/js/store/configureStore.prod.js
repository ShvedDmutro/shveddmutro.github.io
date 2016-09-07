import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default (initialState, rootReducer) => createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);
