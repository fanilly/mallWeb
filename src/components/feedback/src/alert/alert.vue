<template>
  <div class="mj-dialog-black-mask">
    <div class="mj-confirm mj-alert">
      <div class="mj-confirm-bd" v-html="msg"></div>
      <div class="mj-confirm-ft">
        <a href="javascript:;" class="mj-confirm-btn primary" @click.stop="closeAlert">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    callback: Function
  }
};

</script>
<style lang="less" scoped>
@import "../../feedback.less";

</style>
