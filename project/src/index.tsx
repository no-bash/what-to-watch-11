import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store/index';
import {getMoviesAction, handleCheckAuthAction, handlePromoAction} from './store/actions';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
store.dispatch(handlePromoAction());
store.dispatch(handleCheckAuthAction());
store.dispatch(getMoviesAction());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>

  </React.StrictMode>,
);
