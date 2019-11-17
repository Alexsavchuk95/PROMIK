import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncTranslationWithStore } from 'react-redux-i18n';

import { setupStore } from './store';
import {routesDesktop, routesMobile} from './routes';
import 'AssetsRoot/styles/index.css';

const store = setupStore();

syncTranslationWithStore(store);

window.onload = () => {
  setTimeout(() => {
    ReactDOM.render(
      <Provider store={store}>
        <Router
          history={browserHistory}
          routes={window.innerWidth >= 760 ? routesDesktop : routesMobile}
          onUpdate={() => window.scrollTo(0, 0)}
        />
      </Provider>,
      document.getElementById('root'),
    );
  }, 0);
};
