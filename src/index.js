import React from 'react';
import ReactDOM from 'react-dom';
import AppNavigation from './navigations';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AppNavigation />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
