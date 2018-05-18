<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-left'
    };
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = to.path.length == 1 ? 'slide-right' : 'slide-left';
    }
  }
};

</script>
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
