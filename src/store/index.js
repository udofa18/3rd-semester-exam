import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    price: 102,
  },
  getters: {
    counter(state) {
      return state.count;
    },
    priceupdate(state) {
      return state.price;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrease(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
    priceupdate(state) {
      state.count * state.price;
    },
    setValue(state, payload) {
      state.count = payload;
    },
    setQuantity(state, payload) {
      state.count = payload;
    },
  },

  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrease({ commit }) {
      commit("decrease");
    },
    reset({ commit }) {
      commit("reset");
    },
    setValue({ commit }, payload) {
      commit("setValue", payload);
    },
    setQuantity({ commit }, payload) {
      commit("setValue", payload);
    },
  },
  modules: {},
});
