import Vue from "vue";
import Vuex from "vuex";

import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    score(state) {
      return `一共${state.count}`;
    }
  },
  actions: {
    incrementAction({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1500);
    }
  },
  mutations: {
    increment(state, n = 1) {
      state.count += n;
    },

    addExtendRoutes() {
      router.addRoutes([
        {
          path: "/test",
          name: "about",

          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
      ]);
    }
  }
});
