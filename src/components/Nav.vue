<template>
  <div id="nav">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/formIndex">01-表单组件</router-link>
    </li>
    <li>
      <router-link to="/modalIndex">02-弹窗组件</router-link>
    </li>
    <li>
      <router-link to="/treeIndex">03-树形组件</router-link>
    </li>
    <li>
      <router-link to="/routerIndex">04-路由的使用</router-link>
    </li>
    <li>
      <router-link to="/routerProtect">05-路由守护</router-link>
    </li>
    <li>
      <router-link to="/routerImpl">06-路由实现原理</router-link>
    </li>
    <li>
      <router-link to="/vuexIndex">07-vuex的使用</router-link>
    </li>
    <li>
      <router-link to="/vuexImpl">08-vuex实现原理</router-link>
    </li>
    <li>
      <router-link to="/vueImpl">09-实现一个简单的vue</router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "Nav",
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
#nav {
  box-sizing: border-box;
  height: 100%;
  width: 200px;
  padding: 50px 0;
  border-right: 2px solid rgba(0, 0, 0, 0.1);
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  li {
    margin: 5px 0px;
    list-style: none;
  }
}
</style>
