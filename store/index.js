export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app }) {
    try {
      const cookieToken = app.$cookies.get("auth-token");
      if (cookieToken) {
        await commit("user/setToken", cookieToken);
        await dispatch("user/getInfo");
      }
    } catch (error) {}
  },
};
