import Vue from 'vue';
import LoadingTemplate from './loading.vue';
import pageScroll from '@/utils/pageScroll.js';

const LoadingConstructor = Vue.extend({
  extends:LoadingTemplate
}),

instance = new LoadingConstructor({
  el: document.createElement('div')
});

LoadingConstructor.prototype.open = (title) => {
  instance.title = title || '正在加载';
  document.body.appendChild(instance.$el);
  pageScroll.handle();
};

LoadingConstructor.prototype.close = function() {
  const el = instance.$el;
  el.parentNode && el.parentNode.removeChild(el);
  pageScroll.unhandle();
};

export default {
  open: instance.open,
  close: instance.close
};
