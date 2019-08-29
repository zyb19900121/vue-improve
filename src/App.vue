<template>
  <div id="app">
    <Nav></Nav>
    <div class="mainContainer">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  created() {
    this.$store.commit("addExtendRoutes");
  },
  components: { Nav }
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: row;
  height: 100%;
}
.mainContainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
