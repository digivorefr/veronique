// Requiring scss will include it in the Webpack's bundle process.
require('../styles/index.scss');

window.setTimeout(() => null, 1200);

// Enables Hot Module Rendering.
if (module.hot) {
  module.hot.accept();
}
