import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from '../src/Redux/Store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor } from '../src/Redux/Store/store';
import './i18next';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Suspense fallback={(<div>Loading...</div>)}>
          <App />
        </Suspense>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
