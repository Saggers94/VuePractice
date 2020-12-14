export const UserModule = {
  namespaced: true,
  state: {
    user: null,
  },

  //mutations are the functions that effects the state
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },

  //Actions are teh functions that you call throughout your application that calls mutations
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
  },
};
