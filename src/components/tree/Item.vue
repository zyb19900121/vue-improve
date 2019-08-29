<template>
  <li>
    <div @click="toggle">
      {{model.title}}
      <span v-if="isFolder">[{{open ? '-':'+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item class="item" :model="model" v-for="model in model.children" :key="model.title"></item>
    </ul>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    model: {
      type: Object
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    }
	},
	
  created() {},
  mounted() {
    console.log("model: ", this.model);
  },
  methods: {
    toggle() {
      this.isFolder && (this.open = !this.open);
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
</style>
