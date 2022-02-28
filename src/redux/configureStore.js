import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import motorsReducer from './motors/motors';
import motorsDetailReducer from './motors/DetailMotors';

const reducers = combineReducers({ motors: motorsReducer, motorsDetailReducer });
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
