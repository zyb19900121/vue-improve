import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FormIndex from "./components/form";
import ModalIndex from "./components/modal";
import TreeIndex from "./components/tree";
import RouterIndex from "./components/router";
import List from "./components/router/List.vue";
import Detail from "./components/router/Detail.vue";

Vue.use(Router); //引入Router插件

const router = new Router({
  mode: "history", //模式：hash | history | abstract
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/formIndex",
      name: "formIndex",
      component: FormIndex
    },
    {
      path: "/modalIndex",
      name: "modalIndex",
      component: ModalIndex
    },
    {
      path: "/treeIndex",
      name: "treeIndex",
      component: TreeIndex
    },
    {
      path: "/routerIndex",
      component: RouterIndex,
      children: [
        {
          path: "/",
          name: "list",
          component: List
        },
        {
          path: "detail/:id",
          name: "detail",
          component: Detail,
          props: true
        }
      ]
    },
    {
      path: "/routerProtect",
      name: "routerProtect",
      meta: {
        auth: true //需要认证
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/routerProtect")
    },
    {
      path: "/routerImpl",
      name: "routerImpl",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/routerImpl")
    },
    {
      path: "/vuexIndex",
      name: "vuexIndex",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/vuex")
    },
    {
      path: "/vuexImpl",
      name: "vuexImpl",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/vuexImpl")
    },
    {
      path: "/vueImpl",
      name: "vueImpl",
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/vueImpl")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      //路由层级代码分割，生成分片（about.[hash].js）
      //当路由访问时会懒加载
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !window.isLogin) {
    if (window.confirm("请登录")) {
      window.isLogin = true;
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
