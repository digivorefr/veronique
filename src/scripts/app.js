// Requiring assets here will include it in the Webpack's bundle process.
require('../styles/index.scss');
require('../images/icons/favicon-32x32.png');
require('../images/icons/favicon-16x16.png');
require('../images/icons/apple-icon-180x180.png');

const initialize = () => {
  console.log('Initialized');
};

window.onload = initialize;

// Enables Hot Module Rendering.
if (module.hot) {
  module.hot.accept();
}
