<template>
  <div class="mj-notify" :class="classes" v-html="msg"></div>
</template>
<script>
export default {
  data() {
    return {
      classes: ''
    };
  },
  props: {
    msg: String,
    timeout: Number,
    callback: Function
  }
};

</script>
<style lang="less" scoped>
  @import '../../feedback.less';
</style>
