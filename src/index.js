import React, { Suspense } from 'react';
import './I18n/I18n';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';

const loadingLanguage = <h3 className='text-center'>Loading....</h3>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Suspense fallback={loadingLanguage}>
      <Provider store={store}>
        <React.StrictMode>
          <Routes>
            <Route path='/' element={<App />} />
          </Routes>
        </React.StrictMode>
      </Provider>
    </Suspense>
  </Router>
);
