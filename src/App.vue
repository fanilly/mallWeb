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
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55, 0, .1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

</style>
