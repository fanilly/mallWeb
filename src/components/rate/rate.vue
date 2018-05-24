<template>
  <span class="mj-rate" :style="{fontSize: size, color: color}">
    <a href="javascript:;"
      v-for="item, key in ~~count"
      :key="key"
      :class="index >= item ? 'rate-active' : ''"
      :style="{color: index >= item ? activeColor : color, paddingRight: padding}"
      @click="!readonly && choose(item)"
    ></a>
    <span class="mj-rate-text" v-if="!!str" v-html="str"></span>
  </span>
</template>
<script>
export default {
  name: 'mj-rate',
  data() {
    return {
      index: 0,
      str: ''
    };
  },
  watch: {
    value(val) {
      this.choose(val);
    }
  },
  props: {
    count: {
      validator(val) {
        return /^(([1-9]\d*)|0)$/.test(val);
      },
      default: 5
    },
    size: {
      validator(value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: '.42rem'
    },
    color: {
      default: '#e5e5e5'
    },
    activeColor: {
      default: '#ffd162'
    },
    value: {
      validator(val) {
        return Math.floor(val);
      }
    },
    showText: {
      type: Array
    },
    readonly: {
      type: Boolean,
      default: false
    },
    padding: {
      validator(value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: '.06rem'
    }
  },
  methods: {
    choose(index) {
      this.index = index;
      this.$emit('input', index);
      if (!!this.showText) {
        this.str = (this.showText[index - 1] || '').replace('$', index);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.choose(this.value);
    });
  }
};

</script>
<style lang="less">
@import "./rate.less";

</style>
