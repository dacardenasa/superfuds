import { combineReducers } from 'redux';
import { reducer, shoopingCartReducer } from './reducers';

const rootReducer = combineReducers({
    reducer,
    shoopingCartReducer
});

export default rootReducer;
