<template>
  <section class="container">
    <header class="header">
      <h1><span><i class="iconfont icon-shangjia"></i></span>郑州农家小菜</h1>
      <h2><span>￥</span>{{$route.query.totalMoney}}</h2>
    </header>
    <main class="main">
      <h2>支付方式</h2>
      <section class="payment-item" v-for="(item,index) of paymentMethods" :key="index" @click="handleToggleChoose(index)">
        <div class="payment-item-lside">
          <span><i :class="'iconfont '+item.icon" :style="'color:'+item.color"></i></span>
        </div>
        <div class="payment-item-center">
          <h3>{{item.name}}</h3>
          <p>{{item.desc}}</p>
        </div>
        <div class="payment-item-rside">
          <div :class="'choose-btn '+(index == currentChoosedIndex ? 'choosed' : '')"><span><i class="iconfont icon-duigou"></i></span></div>
        </div>
      </section>
    </main>
    <footer class="payment-btn">立即支付</footer>
  </section>
</template>

<script>

export default {
  name:'Payment',
  data(){
    return {
      currentChoosedIndex:0,
      paymentMethods:[{
        name:'支付宝',
        desc:'支付宝支付优惠1%',
        icon:'icon-zhifubao',
        color:'#00a1e9'
      },{
        name:'支付宝',
        desc:'微信支付优惠1%',
        icon:'icon-weixin',
        color:'#3cb036'
      }]
    };
  },
  methods:{
    handleToggleChoose(index){
      this.currentChoosedIndex = index;
    }
  },
  mounted(){
    // console.log()
    // this.totalMoney = this.$route.query.totalMoney;
  }
};

</script>

<style lang="less" scoped>
   @import './Payment.less';
</style>
