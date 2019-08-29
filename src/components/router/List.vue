<template>
  <div>
    <ul>
      <li>
        <router-link to="/routerIndex/detail/1">路由1</router-link>
      </li>
      <li>
        <router-link to="/routerIndex/detail/2">路由2</router-link>
      </li>
      <li>
        <router-link to="/routerIndex/detail/3">路由3</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
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
