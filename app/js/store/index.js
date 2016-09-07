import configureStore from './configureStore';
import rootReducer from '../reducers';

export default initialState => configureStore(initialState, rootReducer);
