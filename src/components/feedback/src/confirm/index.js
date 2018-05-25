import Vue from 'vue';
import pageScroll from '@/utils/pageScroll.js';
import ConfirmTemplate from './confirm.vue';

const ConfirmConstructor = Vue.extend({
  extends:ConfirmTemplate
});

const instance = new ConfirmConstructor({
  el: document.createElement('div')
});

const hashChange = function() {
  pageScroll.unhandle();
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
};

ConfirmConstructor.prototype.closeConfirm = function(stay, callback) {
  let stopClose = true;
  if (typeof callback === 'function') {
    stopClose = callback();
    if (stopClose === undefined) stopClose = true;
  }
  if (!stopClose || stay) return;
  pageScroll.unhandle();
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  window.removeEventListener("hashchange", hashChange);
};

const Confirm = (options = {}) => {
  instance.msg = options.msg || '';
  instance.title = options.title || '提示';
  instance.options = options.options;
  window.addEventListener("hashchange", hashChange);
  document.body.appendChild(instance.$el);
  pageScroll.handle();
};

export default Confirm;
