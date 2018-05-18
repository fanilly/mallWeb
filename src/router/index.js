import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/pages/Welcome/Welcome';

const Shop = () => import('@/pages/Shop/Shop');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }
  ]
});
