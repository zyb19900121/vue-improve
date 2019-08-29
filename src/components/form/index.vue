<template>
  <div>
    <h3>表单组件</h3>
    <hr />
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" autocomplete="off" placeholder="用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" autocomplete="off" type="password" placeholder="密码"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submitForm('loginForm')">提交</button>
      </k-form-item>
    </k-form>
    {{model.username}}
    {{model.password}}
  </div>
</template>

<script>
import KForm from "./Form";
import KFormItem from "./FormItem";
import KInput from "./Input";
export default {
  name: "Index",
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  created() {},
  mounted() {
		console.log(this);
	},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("请求登陆！");
        } else {
          console.log("校验失败！");
        }
      });
    }
  },
  components: { KForm, KFormItem, KInput }
};
</script>

<style lang='less' scoped>
</style>
