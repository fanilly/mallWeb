// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import lazyLoad from 'vue-lazyload';

import './styles/common.less';
import './styles/animate.less';
import './iconfont/iconfont.css';

Vue.use(lazyLoad);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
