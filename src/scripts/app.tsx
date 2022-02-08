import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from 'scripts/router';

// Requiring assets here will include it in the Webpack's bundle process.
require('../styles/index.scss');
require('../images/icons/favicon-32x32.png');
require('../images/icons/favicon-16x16.png');
require('../images/icons/apple-icon-180x180.png');

const initialize = async (): Promise<void> => {
  ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('app'),
  );
};

window.onload = initialize;

window.addEventListener('beforeunload', () => {
  ReactDOM.unmountComponentAtNode(document.querySelector('#app') as Element);
});

// Enables Hot Module Rendering.
if (module.hot) {
  module.hot.accept();
}
