import VueRouter, { RouteConfig } from 'vue-router';
import Home from 'scripts/pages/Home.vue';
import NotFound from 'scripts/pages/NotFound.vue';

const routes: RouteConfig[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '*', component: NotFound, name: '404' },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
