// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import router from 'scripts/router';
// import Layout from 'scripts/pages/Layout.vue';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layout from 'scripts/pages/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Requiring assets here will include it in the Webpack's bundle process.
require('../styles/index.scss');
require('../images/icons/favicon-32x32.png');
require('../images/icons/favicon-16x16.png');
require('../images/icons/apple-icon-180x180.png');

// Vue.use(VueRouter);

// const initialize = (): Vue => new Vue({
//   el: '#app',
//   components: {
//     Layout,
//   },
//   router,
//   render: (createElement) => createElement(Layout),
// });

const initialize = async (): Promise<void> => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Router >
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
