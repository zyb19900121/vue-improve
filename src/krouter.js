import Vue from "vue";

import ModalIndex from "./components/modal";
import TreeIndex from "./components/tree";

class KRouter {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};

    //路由响应式
    this.app = new Vue({
      data: {
        current: "/"
      }
    });
  }

  init() {
    this.bindEvents(); //监听url变化
    this.createRouteMap(this.$options); //解析路由配置
    this.initComponent(); //实现两个组件
  }

  bindEvents() {
    window.addEventListener("load", this.onHashChange.bind(this));
    window.addEventListener("hashchange", () => this.onHashChange());
  }
  createRouteMap(options) {
    options.routes.forEach(item => {
      this.routeMap[item.path] = item.component;
    });
  }
  initComponent() {
    //router-link, router-view

    //<router-link>home</router-link>
    Vue.component("router-link", {
      props: {
        to: String
      },
      render(h) {
        //h(tag,data,children)
        return h(
          "a",
          {
            attrs: {
              href: `#${this.to}`
            }
          },
          [this.$slots.default]
        );
      }
    });

    //<router-view></router-view>
    Vue.component("router-view", {
      render: h => {
        const comp = this.routeMap[this.app.current];
        return h(comp);
      }
    });
  }

  onHashChange() {
    this.app.current = window.location.hash.slice(1) || "/";
  }
}

KRouter.install = function(Vue) {
  //混入
  Vue.mixin({
    beforeCreate() {
      //this是Vue实例
      if (this.$options.router) {
        //仅在根组件中执行一次
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    }
  });
};

Vue.use(KRouter);

export default new KRouter({
  routes: [
    {
      path: "/modalIndex",
      component: ModalIndex
    },
    {
      path: "/treeIndex",
      component: TreeIndex
    }
  ]
});
