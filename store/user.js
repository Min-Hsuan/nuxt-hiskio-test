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
    const initState = getDefaultState();
    Object.keys(initState).forEach((key) => (state[key] = initState(key)));
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
};
