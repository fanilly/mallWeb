import Vue from 'vue';
import pageScroll from '@/utils/pageScroll.js';
import AlertTemplate from './alert.vue';

const AlertConstructor = Vue.extend({
  extends:AlertTemplate
});

const instance = new AlertConstructor({
  el: document.createElement('div')
});

const hashChange = function() {
  pageScroll.unhandle();
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
};

AlertConstructor.prototype.closeAlert = function() {
  pageScroll.unhandle();
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  window.removeEventListener("hashchange", hashChange);
  typeof this.callback === 'function' && this.callback();
};

const Alert = (options = {}) => {
  instance.msg = options.msg;
  instance.callback = options.callback;
  window.addEventListener("hashchange", hashChange);
  document.body.appendChild(instance.$el);
  pageScroll.handle();
};

export default Alert;
