import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import global from './global';

export default combineReducers({
    data: global,
    routing: routerReducer,
});
