<template>
  <div>
    <!-- <h3>1、监听url变化（hashchange事件，获取window.location.hash）</h3>
    <h3>2、解析路由配置（将路由path与对应的组件做映射关系）</h3>
    <h3>3、动态加载相应组件（将监听的url数据，绑定到vue实例上，从而实现响应式）</h3>-->
    <h3>
      具体实现请参考目录下
      <strong>kvuex.js</strong>
      <span>和</span>
      <strong>kstore.js</strong>
      文件
    </h3>

    <div>状态count:{{$store.state.count}}</div>
    <div>名称:{{$store.state.name}}</div>
  </div>
</template>

<script>
export default {
  name: "",
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
