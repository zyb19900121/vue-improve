<template>
  <div>
    状态管理: {{$store.state.count}}
    <br />
    getter: {{$store.getters.score}}
    <button @click="()=>this.increment()">+</button>
  </div>
</template>

<script>
export default {
  name: "vuex",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    increment() {
      //修改状态用commit
      // this.$store.commit("increment", 2);
      this.$store.dispatch("incrementAction");
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
</style>
