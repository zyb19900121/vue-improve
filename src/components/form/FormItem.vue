<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <span v-if="errorMessage">{{errorMessage}}</span>
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  name: "",
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String
    }
  },
  data() {
    return { errorMessage: "" };
  },
  created() {},
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];

      const desc = { [this.prop]: rules };
      const schema = new Schema(desc);
      //return 的是校验结果的promise
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = "";
        }
      });
    }
  },
  inject: ["form"],
  components: {}
};
</script>

<style lang='less' scoped>
.label {
  margin-right: 10px;
}
span {
  color: red;
  font-size: 14px;
}
</style>
