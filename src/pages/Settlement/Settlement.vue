<template>
  <section class="container">
    <header class="header">
      <div class="avatar"><img src="../../assets/head.jpg" alt=""></div>
      <div class="nick-name">卮言</div>
      <div class="del-btn"><span><i class="iconfont icon-shanchu"></i></span>删除</div>
    </header>
    <main class="main">
      <ul class="goods-list">
        <li v-for="(item,index) of trolleys">
          <div>{{item.goodsname}}</div>
          <div>{{item.count}}份</div>
          <div>￥{{item.shopprice}}</div>
        </li>
      </ul>
      <textarea class="textarea" placeholder="亲，您还有什么其它要求都可以写在这里呦~"></textarea>
    </main>
    <footer class="trolley">
      <div class="count">总计 <span>￥{{totalMoney}}</span> 元</div>
      <div class="btn" @click="handleGoPayment">提交订单</div>
    </footer>
  </section>
</template>
<script>
document.title = '结算';
import storageUtils from '@/utils/Storage.js';
export default {
  name: 'Settlement',
  data() {
    return {
      trolleys: [],
      trolleysTotal: 0,
      totalMoney: 0
    };
  },
  methods: {
    handleGoPayment() {
      this.$router.push({
        name:'Payment',
        query:{
          totalMoney:this.totalMoney
        }
      });
    },
    initTrolley() {
      let trolleys = storageUtils.getStorage('trolleys');
      this.trolleys = trolleys ? JSON.parse(trolleys) : [];
      this.trolleysTotal = this.trolleys.map(item => item.count).reduce((total, num) => total + num);
      this.totalMoney = this.trolleys.map(item => item.shopprice * item.count).reduce((total, num) => total + num);
      console.log(this.trolleys);
    }
  },
  mounted() {
    this.initTrolley();
  }
};

</script>
<style lang="less" scoped>
@import './Settlement.less';

</style>
