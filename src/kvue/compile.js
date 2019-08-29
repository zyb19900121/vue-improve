//遍历模版，将里面的差值表达式或者k-xx、@xx进行处理
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      //1.将$el中的内容搬家到一个fragment，目的为提高效率
      this.$fragment = this.node2Fragment(this.$el);
      //2.编译fragment

      //3.将编译结果追加到el中
    }
  }

  node2Fragment() {}
}
