import { createStore, applyMiddleware } from 'redux'
import loginReducer from '../Reducer/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools();

const store = createStore(loginReducer,composeEnhancers);
export default store;