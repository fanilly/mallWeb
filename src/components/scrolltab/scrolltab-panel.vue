<template>
  <div class="mj-scrolltab-content-item">
    <strong class="mj-scrolltab-content-title">{{label}}</strong>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mj-scrolltab-panel',
  props: {
    label: String,
    icon: String,
    active: Boolean
  },
  mounted() {
    this.$parent.addItem({ label: this.label, icon: this.icon, _uid: this._uid });
  }
};
</script>
<style lang="less" scoped>
@import "./scrolltab.less";
</style>
