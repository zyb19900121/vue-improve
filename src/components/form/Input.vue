<template>
  <div>
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "",
  props: {
    value: {
      type: String,
      value: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);

      this.$parent.$emit("validate");
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
</style>
