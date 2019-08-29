<template>
  <div>
    <h1>tree组件</h1>
    <ul>
      <item class="item" :model="treeData"></item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "tree",
  data() {
    return {
      treeData: {
        title: "web全栈架构师",
        children: [
          {
            title: "Java架构师",
            children: [
              {
                title: "111"
              }
            ]
          },
          {
            title: "222"
          },
          {
            title: "333",
            children: [
              {
                title: "333-1"
              },
              {
                title: "333-2"
              },
              {
                title: "333-3"
              },
              {
                title: "333-4"
              }
            ]
          }
        ]
      }
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: { Item }
};
</script>

<style lang='less' scoped>
</style>
