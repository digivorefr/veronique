import Vue from 'vue';
import VueRouter from 'vue-router';
import router from 'scripts/router';
import Layout from 'scripts/Layout.vue';

// Requiring assets here will include it in the Webpack's bundle process.
require('../styles/index.scss');

Vue.use(VueRouter);

const initialize = (): Vue => new Vue({
  el: '#app',
  components: {
    Layout,
  },
  router,
  render: (createElement) => createElement(Layout),
});

window.onload = initialize;

// Enables Hot Module Rendering.
if (module.hot) {
  module.hot.accept();
}
