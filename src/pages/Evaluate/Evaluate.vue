<template>
  <section class="container">
    <!--  <header class="header">
      <h1><span><i class="iconfont icon-shangjia"></i></span>郑州农家小菜</h1>
    </header> -->
    <main class="page-main">
      <section class="evaluate-rate">
        <div class="evaluate-rate-item">
          <div class="lside">口味：</div>
          <div class="rside">
            <rate slot="left" v-model="taste" :show-text="rateText"></rate>
          </div>
        </div>
        <div class="evaluate-rate-item">
          <div class="lside">商家：</div>
          <div class="rside">
            <rate slot="left" v-model="shop" :show-text="rateText"></rate>
          </div>
        </div>
        <textarea class="textarea" v-model="evaluateText" placeholder="写下您对本店的评价吧！"></textarea>
        <p class="evaluate-total">{{evaluateText.length}}/100</p>
      </section>
    </main>
    <section class="evaluate-img">
      <h2>发几张照片来秀一秀吧！最多可上传三张图片（选填）</h2>
      <section class="evaluate-img-wapper">
        <div class="item" v-for="(item,index) in viewImgs" :style="'background-image:url('+item+')'">
          <span><i class="iconfont icon-iconjia"></i></span>
          <input type="file" @change="handleChooseImg" :data-index="index" name="">
        </div>
      </section>
    </section>
    <div class="subbtn" @click="handleSubmitEvaluate">提交评价</div>
  </section>
</template>
<script>
document.title = '评价';

import rate from '@/components/rate/rate.vue';
// 创建本地地址
const getFileUrl = (sourceObj) => { return window.URL.createObjectURL(sourceObj.files.item(0)); };
export default {
  data() {
    return {
      taste: 5, //口味评分
      evaluateText: '',
      viewImgs:['','',''],
      rateText: ['很差', '还行', '一般', '挺好', '非常好'],
      shop: 5 //商家评分
    };
  },
  watch:{
    evaluateText(now){
      this.evaluateText = now.substr(0, 100);
    }
  },
  methods: {

    //选择图片
    handleChooseImg(e) {
      console.log(e);
      let index = e.target.dataset.index*1;
      this.viewImgs.splice(index,1,getFileUrl(e.srcElement));
    },

    //提交评论
    handleSubmitEvaluate(){

    }
  },
  components: {
    rate
  }
};

</script>
<style lang="less" scoped>
@import './Evaluate.less';

</style>
