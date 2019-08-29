<template>
  <div>
    <p>Detail</p>
    <p>参数---id:{{id}}</p>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style lang='less' scoped>
</style>
