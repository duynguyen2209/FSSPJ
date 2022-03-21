import { createStore, applyMiddleware } from 'redux'
import loginReducer from '../Reducer/reducer';
import {themeReducer} from '../Reducer/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = composeWithDevTools();

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persitedReducer = persistReducer(persistConfig, loginReducer);
const store = createStore(persitedReducer,composeEnhancers);

export const persistor = persistStore(store);
export default store;