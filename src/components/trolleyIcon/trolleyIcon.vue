<template>
  <section class="trolley-icon">
    <span><i class="iconfont icon-iconfontgouwuche"></i></span>
    <div v-if="total>=1" class="corner">{{total}}</div>
  </section>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
      require: true
    }
  },
  data() {
    return {};
  }
};

</script>
<style lang="less" scoped>
.trolley-icon {
  width: .9rem;
  height: .9rem;
  border-radius: 50%;
  background-color: #ff6634;
  text-align: center;
  line-height: .9rem;
  position: relative;
  span {
    color: #fff;
    i {
      font-size: .44rem;
    }
  }
  .corner {
    position: absolute;
    right: -4px;
    top: -2px;
    width: .36rem;
    height: .36rem;
    border-radius: 50%;
    background-color: #f69a1b;
    line-height: .38rem;
    color: #fff;
    font-size: 12px;
  }
}

</style>
