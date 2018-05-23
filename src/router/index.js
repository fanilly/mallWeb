import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/pages/Welcome/Welcome';

const Shop = () =>
  import ('@/pages/Shop/Shop');
const Settlement = () =>
  import ('@/pages/Settlement/Settlement');
const Payment = () =>
  import ('@/pages/Payment/Payment');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement,
      meta: {
        keepAlive: false
      }
    }, {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      meta: {
        keepAlive: false
      }
    }
  ]
});
