import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import nextRootReducer from '../reducers';

export default (initialState, rootReducer) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};
