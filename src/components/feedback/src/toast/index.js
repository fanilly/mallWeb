import Vue from 'vue';
import ToastTemplate from './toast.vue';
import pageScroll from '@/utils/pageScroll.js';

const ToastConstructor = Vue.extend({
    extends: ToastTemplate
  }),

  instance = new ToastConstructor({
    el: document.createElement('div')
  });

// 关闭toast
ToastConstructor.prototype.closeToast = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  pageScroll.unhandle();
  typeof this.callback === 'function' && this.callback();
};

// 弹出toast
const Toast = (options = {}) => {
  instance.msg = options.msg;
  instance.icon = options.icon;
  instance.timeout = ~~options.timeout || 2000;
  instance.callback = options.callback;

  document.body.appendChild(instance.$el);
  pageScroll.handle();

  const timer = setTimeout(() => {
    clearTimeout(timer);
    instance.closeToast();
  }, instance.timeout + 100);
};

export default Toast;
