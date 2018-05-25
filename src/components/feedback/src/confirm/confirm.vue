<template>
  <div class="mj-dialog-black-mask">
    <div class="mj-confirm">
      <div class="mj-confirm-hd"><strong class="mj-confirm-title" v-html="title"></strong></div>
      <div class="mj-confirm-bd" v-html="msg"></div>
      <template v-if="typeof options == 'function'">
        <div class="mj-confirm-ft">
          <a href="javascript:;" class="mj-confirm-btn default" @click.stop="closeConfirm(false)">取消</a>
          <a href="javascript:;" class="mj-confirm-btn primary" @click.stop="closeConfirm(false, options)">确定</a>
        </div>
      </template>
      <template v-else>
        <div class="mj-confirm-ft">
          <a href="javascript:;"
            class="mj-confirm-btn"
            :key="key"
            v-for="item, key in options"
            :class="typeof item.color == 'boolean' ? (item.color ? 'primary' : 'default') : ''"
            :style="{color: item.color}"
            @click.stop="closeConfirm(item.stay, item.callback)"
          >{{item.txt}}</a>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    msg: String,
    options: {
      type: [Array, Function],
      default: () => {}
    }
  }
};

</script>

<style lang="less" scoped>
  @import "../../feedback.less";
</style>
