const getDefaultState = () => {
  return {
    fundraise: [], //募資課程
  };
};
export const state = getDefaultState;
export const mutations = {
  setFundraise(state, payload) {
    state.fundraise = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app }) {
    try {
      const cookieToken = app.$cookies.get("auth-token");
      if (cookieToken) {
        await commit("user/setToken", cookieToken);
        await dispatch("user/getInfo");
      } else {
        const cartItems = localStorage.getItem("items");
        commit("cart/setItems", JSON.parse(cartItems));
      }
    } catch (error) {}
  },
};
