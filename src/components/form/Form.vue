<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { Promise } from "q";
export default {
  name: "",
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    validate(callback) {
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate());

      //所有任务都通过才算检验成功
      Promise.all(tasks)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    }
  },
  provide() {
    return {
      form: this
    };
  },
  components: {}
};
</script>

<style lang='less' scoped>
</style>
