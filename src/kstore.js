import Vue from "vue";
import Vuex from "./kvuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    name: "kstore"
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
    }
  }
});
