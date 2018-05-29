<template>
  <section class="container">
    <form ref="formWapper">
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
          <textarea class="textarea" v-model="evaluateText" name="textarea" placeholder="写下您对本店的评价吧！"></textarea>
          <p class="evaluate-total">{{evaluateText.length}}/100</p>
        </section>
      </main>
      <section class="evaluate-img">
        <h2>发几张照片来秀一秀吧！最多可上传三张图片（选填）</h2>
        <section class="evaluate-img-wapper">
          <div class="item" v-for="(item,index) in viewImgs" :style="'background-image:url('+item+')'">
            <span><i class="iconfont icon-iconjia"></i></span>
            <input type="file" :accept="accept" @change="handleChooseImg" :data-index="index" :name="'img'+index">
          </div>
        </section>
      </section>
    </form>
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
      accept: 'image/gif,image/jpeg,image/png,image/jpg',
      viewImgs: ['', '', ''],
      rateText: ['很差', '还行', '一般', '挺好', '非常好'],
      shop: 5 //商家评分
    };
  },
  watch: {
    //限制长度为100个字符
    evaluateText(now) {
      this.evaluateText = now.substr(0, 100);
    }
  },
  methods: {

    //选择图片
    handleChooseImg(e) {
      let fileType = e.target.files[0].type;
      // 文件类型只能为accept中定义的类型
      if (this.accept.indexOf(fileType) == -1 || fileType == '') {
        this.feedback.Toast({
          msg: '请选择正确的文件类型',
          icon: 'error',
          timeout: 1500
        });
        return;
      }
      // 将选择的图片显示到页面中
      let index = e.target.dataset.index * 1;
      this.viewImgs.splice(index, 1, getFileUrl(e.srcElement));
    },

    //提交评论
    handleSubmitEvaluate() {
      //新建FormData对象 将页面需要提交的数据加入FormData实例中
      const instance = new FormData(this.$refs.formWapper);
      instance.append('taste', this.taste);
      instance.append('shop', this.shop);
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
