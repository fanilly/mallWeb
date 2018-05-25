<template>
  <div class="mj-dialog-white-mask">
    <div class="mj-toast" :class="iconsClass == '' ? 'mj-toast-none-icon' : ''">
      <div v-if="iconsClass" :class="iconsClass"></div>
      <p class="mj-toast-content" v-html="msg"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    icon: String,
    timeout: Number,
    callback: Function
  },
  computed: {
    iconsClass() {
      let _icon = '';
      if (this.icon === 'success' || this.icon === 'error') {
        _icon = 'mj-toast-' + this.icon + '-icon';
      }
      return _icon;
    }
  }
};
</script>
<style lang="less">
  @import '../../feedback.less';
</style>
