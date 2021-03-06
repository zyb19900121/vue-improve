import Vue from "vue";
export default function create(component, props) {
  //先创建实例
  const vm = new Vue({
    render(h) {
      //h就是createElement，它返回VNode
      return h(component, { props });
    }
  }).$mount();

  //手动挂载
  document.body.appendChild(vm.$el);

  //销毁方法
	console.log('vm: ', vm);
	const comp = vm.$children[0];
  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
	};
	
	return comp;
}
