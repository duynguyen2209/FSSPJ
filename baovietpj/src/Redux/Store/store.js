import { createStore, applyMiddleware } from 'redux'
import loginReducer from '../Reducer/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(loginReducer);
export default store;