import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import RentService from './services/rent-service';
import { RentServiceProvider } from './components/RentServiceContext';
import store from './store';

const rentService = new RentService();

ReactDom.render(
  <Provider store={ store }>
    <ErrorBoundary>
      <RentServiceProvider value={ rentService }>
        <Router>
          <App/>
        </Router>
      </RentServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
