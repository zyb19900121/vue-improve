<template>
  <div>
    <h1>弹窗组件</h1>
    <button @click="handleClick">弹出</button>
  </div>
</template>

<script>
import Notice from "./Notice";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      const notice = this.$create(Notice, {
        title: "这是标题",
        message: "这是内容",
        duration: 3000
      });
      notice.show();
    }
  },
  components: {
    Notice
  }
};
</script>

<style lang='less' scoped>
</style>
