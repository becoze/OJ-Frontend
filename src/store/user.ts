// initial state
import { StoreOptions } from "vuex";

export default {
  namespaced: true,

  // store user status
  state: () => ({
    loginUser: {
      username: "Nick",
      role: "",
      userLoginStatus: "",
    },
  }),

  // method to gather user info/state
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "Nick" });
    },
  },

  // method to update user status
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
