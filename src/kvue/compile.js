//遍历模版，将里面的差值表达式或者k-xx、@xx进行处理
class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      //1.将$el中的内容搬家到一个fragment，目的为提高效率
      this.$fragment = this.node2Fragment(this.$el);
      //2.编译fragment
      this.compile(this.$fragment);
      //3.将编译结果追加到el中
      this.$el.appendChild(this.$fragment);
    }
  }

  //遍历el，把内容搬到fragment中
  node2Fragment(el) {
    const fragment = document.createDocumentFragment();
    let child;
    while ((child = el.firstChild)) {
      //appendChild是移动操作
      fragment.appendChild(child);
    }
    return fragment;
  }

  compile(fragment) {
    //遍历fragment
    const childNodes = fragment.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        // console.log("编译元素：" + node.nodeName);
      } else if (this.isInterpolation(node)) {
        // console.log("编译文本：" + node.textContent);
        this.compileText(node);
      }

      //递归子元素
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    });
  }

  isElement(node) {
    return node.nodeType === 1;
  }

  isInterpolation(node) {
    //需要满足{{xx}}
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
  }

  //把差值表达式替换成实际的内容
  compileText(node) {
    node.textContent = this.$vm[RegExp.$1.trim()];

    const exp = RegExp.$1.trim();
    this.update(node, this.$vm, exp, "text");
  }

  //编写update函数，可复用
  //exp是表达式（RegExp.$1）,dir是具体操作：text，html，model
  update(node, vm, exp, dir) {
    const fn = this[dir + "Updator"];
    fn && fn(node, vm[exp]);
    //创建watcher
  }

  textUpdator(node, value) {
    node.textContent = value;
  }
}
