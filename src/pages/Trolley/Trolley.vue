<template>
  <section class="container">
    aaa
    <footer-trolley
      lable="去结算"
      :totalMoney="totalMoney"
      :total="trolleysTotal"
      @handleClickBtn="handleGoSettlement"
    ></footer-trolley>
  </section>
</template>
<script>
import footerTrolley from '@/components/footerTrolley/footerTrolley.vue';
import storageUtils from '@/utils/Storage.js';
// import
export default {
  name: 'trolley',
  data() {
    return {
      trolleys: [],
      trolleysTotal: 0,
      totalMoney: 0
    };
  },
  methods: {
    //初始化购物车
    initTrolley() {
      let trolleys = storageUtils.getStorage('trolleys');
      this.trolleys = trolleys ? JSON.parse(trolleys) : [];
      if (this.trolleys.length >= 1) {
        this.trolleysTotal = this.trolleys.map(item => item.count).reduce((total, num) => total + num);
        this.totalMoney = this.trolleys.map(item => item.shopprice * item.count).reduce((total, num) => total + num);
      } else {
        this.trolleysTotal = 0;
        this.totalMoney = 0;
      }
    },
    handleGoSettlement(){

    }
  },
  mounted() {
    this.initTrolley();
    console.log(1);
  },
  components: {
    footerTrolley
  }
};

</script>
<style lang="less" scoped>
@import './Trolley.less';

</style>
