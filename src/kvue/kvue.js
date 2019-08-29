// new Kvue({
// 	data:{
// 		msg:'test'
// 	}
// })

class Kvue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;

    // 响应化
    this.observe(this.$data);

    //测试代码
    new Watcher(this, "test");
    this.test;
  }

  //递归遍历，使传进来的对象响应化
  observe(value) {
    if (!value || typeof value !== "object") {
      return;
    }

    //遍历
    Object.keys(value).forEach(key => {
      //对key做响应式的处理
      this.defineReactive(value, key, value[key]);
      this.proxyData(key);
    });
  }

  defineReactive(obj, key, val) {
    //递归
    this.observe(val);

    //创建Dep实例：Dep和key是一对一关系
    const dep = new Dep();

    Object.defineProperty(obj, key, {
      get() {
        //将Dep.target指向的Watcher实例加入到Dep
        Dep.target && dep.addDep(Dep.target);
        return val;
      },
      set(newVal) {
        if (val !== newVal) {
          val = newVal;
          dep.notify();
        }
      }
    });
  }

  //在vue根上定义属性代理$data中的数据
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key];
      },
      set(newVal) {
        this.$data[key] = newVal;
      }
    });
  }
}

//Dep:管理若干watcher的实例，它和key一一对应
class Dep {
  constructor() {
    this.deps = [];
  }
  addDep(watcher) {
    this.deps.push(watcher);
  }

  notify() {
    this.deps.forEach(watcher => watcher.update());
  }
}

//保存ui中的依赖，实现update函数可以使其更新
class Watcher {
  constructor(vm, key) {
    this.vm = vm;
    this.key = key;

    //将当前实例指向Dep.target
    Dep.target = this;
  }

  update() {
    console.log(`${this.key}属性更新了!`);
  }
}
