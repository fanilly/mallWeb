<template>
  <div class="mj-scrolltab">
    <div class="mj-scrolltab-nav" ref="navbox">
      <a href="javascript:;"
        class="mj-scrolltab-item"
        v-for="item, key in navList"
        :key="key"
        :ref="`tabitem_${key}`"
        :class="activeIndex == key ? 'mj-scrolltab-active' : ''"
        @click="moveHandler(key)">
        <div class="mj-scrolltab-icon"><i :class="'iconfont '+item.icon"></i></div>
        <div class="mj-scrolltab-title">{{item.label}}</div>
      </a>
    </div>
    <div class="mj-scrolltab-content" ref="scrollView">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mj-scrolltab',
  data() {
    return {
      scrolling: false, //正在滚动
      navList: [], //导航列表
      activeIndex: this.index, //当前位置
      navtop: 0
    };
  },
  props: {
    index: { //初始位置
      validator(val) {
        return /^(([1-9]\d*)|0)$/.test(val);
      },
      default: 0
    },
    callback: { //回调函数
      type: Function
    }
  },
  methods: {

    //初始化
    init() {
      this.scrollView = this.$refs.scrollView;
      this.contentOffsetTop = this.scrollView.getBoundingClientRect().top;
      this.bindEvent();
    },

    //添加panel
    addItem(panel) {
      this.navList.push(panel);
    },

    //获取所有的panels
    getPanels() {
      return this.$children.filter(item => item.$options.name === 'mj-scrolltab-panel');
    },

    //绑定事件
    bindEvent() {
      this.scrollView.addEventListener('scroll', this.scrollHandler);
      window.addEventListener('resize', this.scrollHandler);
    },

    //设置默认位置
    setDefault() {
      this.getPanels().every((panel, index) => {
        if (this.activeIndex === index) {
          this.moveHandler(index);
          return false;
        }
        return true;
      });
    },

    //移动事件
    moveHandler(index) {
      this.activeIndex = index;
      this.scrollContent(index);
    },

    //滚动至指定位置
    scrollContent(index) {
      if (this.scrolling) return;
      this.scrolling = true;

      const itemOffsetTop = this.getPanels()[index].$el.getBoundingClientRect().top;
      this.scrollView.scrollTop = itemOffsetTop + this.scrollView.scrollTop - this.contentOffsetTop + 2;

      setTimeout(() => {
        this.scrolling = false;
      }, 10);
    },

    //设置导航位置
    navInView(index = 0) {
      let navitem = this.$refs['tabitem_' + index][0],
        height = ~~navitem.offsetHeight;
      if (navitem.offsetTop - height <= this.navtop) {
        this.navtop -= height;
      } else {
        if (navitem.offsetTop + height * 3 >= this.scrollView.offsetHeight) {
          this.navtop += height;
        }
      }
      this.$refs.navbox.scrollTop = this.navtop;
    },

    //监听滚动事件
    scrollHandler() {
      if (this.scrolling) return;
      let panels = this.getPanels(),
        panelsLength = panels.length,
        scrollBox = this.scrollView,
        scrollBoxHeight = scrollBox.offsetHeight,
        scrollBoxTop = scrollBox.scrollTop,
        panelItemHeight = panels.map((item, index) => panels[index].$el.offsetHeight).reduce((total, num) => total + num);
      // console.log(scrollBoxTop, panelsLength, panelItemHeight, scrollBoxHeight);
      // console.log('contentOffsetTop:' + this.contentOffsetTop);

      if (scrollBoxTop >= panelItemHeight * panelsLength - scrollBoxHeight) {
        this.activeIndex = panelsLength - 1;
        return;
      }

      panels.forEach((panel, index) => {
        if (panel.$el.getBoundingClientRect().top <= this.contentOffsetTop) {
          this.activeIndex = index;
        }
      });
    }
  },

  watch: {
    //导航列表发生变化 初始化默认位置
    navList() {
      this.setDefault();
    },

    //左部导航发生变化 调用回调函数
    activeIndex(index) {
      this.navInView(index);
      this.callback && this.callback(index);
    },

    //index 发生变化 页面滚动至对应位置
    index(index) {
      this.scrollContent(index);
      this.activeIndex = index;
    }
  },

  mounted() {
    this.init();
  },

  beforeDestroy() {
    this.scrollView.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('resize', this.scrollHandler);
  }
};

</script>
<style lang="less">
  @import "./scrolltab.less";
</style>
