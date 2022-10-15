const getDefaultState = () => {
  return {
    token: null,
    name: null,
    avatar: null,
  };
};
export const state = getDefaultState;
export const getters = {
  getToken: (state) => {
    return state.token;
  },
};
export const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  setToken(state, payload) {
    state.token = payload;
  },
  setInfo(state, payload) {
    state.name = payload.name;
    state.avatar = payload.avatar;
  },
};

export const actions = {
  async getInfo({ commit }) {
    const response = await this.$api.auth.member();
    if (response && response.status === 200) {
      commit("setInfo", {
        name: response.data.username,
        avatar: response.data.avatar,
      });
    }
  },
  logout({ commit }, msg = "已登出") {
    commit("resetState");
    commit("cart/resetState", null, { root: true });
    commit(
      "notify/setMessage",
      {
        type: "success",
        message: msg,
      },
      { root: true }
    );
    this.$cookies.remove("auth-token");
  },
};
