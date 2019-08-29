let Vue;

class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state
    });
    this.mutations = options.mutations;
    this.actions = options.actions;

    options.getters && this.handleGetter(options.getters);
  }

  commit = (type, arg) => {
    this.mutations[type](this.state, arg);
  };

  dispatch(type, arg) {
    this.actions[type](
      {
        commit: this.commit,
        state: this.state,
        dispatch: this.dispatch
      },
      arg
    );
  }
  handleGetter(getters) {
    this.getters = {};
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state);
        }
      });
    });
  }
}

function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      //this是Vue实例
      if (this.$options.store) {
        //仅在根组件中执行一次
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

export default { Store, install };
