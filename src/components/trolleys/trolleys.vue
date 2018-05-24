<template>
  <footer class="trolley" ref="footer">
    <section class="trolley-icon">
      <span><i class="iconfont icon-iconfontgouwuche"></i></span>
      <div v-if="total>=1" class="corner">{{total}}</div>
    </section>
    <div class="count">总计 <span>￥{{totalMoney}}</span> 元</div>
    <div class="btn" @click="handleClickBtn">选好了</div>
  </footer>
</template>
<script>
export default {
  props: {
    total: {
      type: Number
    },
    totalMoney: {
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClickBtn() {
      this.$emit('handleClickBtn');
    },
    initTrolleyPos() {
      this.$emit('initTrolleyPos', this.$refs.footer.offsetHeight);
    }
  },
  mounted() {
    // console.log(this.$parent.);
    this.initTrolleyPos();
  }
};

</script>
<style lang="less" scoped>
@import './trolleys.less';

</style>
