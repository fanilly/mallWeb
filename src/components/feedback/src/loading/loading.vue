<template>
  <div class="mj-dialog-white-mask">
    <div class="mj-loading">
      <div class="mj-loading-icon"></div>
      <div class="mj-loading-txt" v-html="title"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};

</script>
<style lang="less" scoped>
  @import '../../feedback.less';
</style>
