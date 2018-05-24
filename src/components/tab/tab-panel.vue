<template>
  <div class="mj-tab-panel-item" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'mj-tab-panel',
  data() {
    return {
      isCurrent: false
    };
  },
  props: {
    label: String,
    active: Boolean,
    tabkey: [String, Number]
  },
  computed: {
    classes() {
      return this.$parent.activeIndex === this._uid || this.isCurrent ? 'mj-tab-active' : '';
    }
  },
  watch: {
    active() {
      this.$parent.init();
    },
    label() {
      this.$parent.init();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$parent.init();
    });
  }
};

</script>
