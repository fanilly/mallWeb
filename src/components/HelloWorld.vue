<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Mall App'
    };
  }
};
</script>

<style length="less" scoped>
  @import './HelloWorld.less'
</style>
