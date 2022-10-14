const getDefaultState = () => {
  return {
    items: [],
    subtotal: 0,
    total: 0,
  };
};
export const state = getDefaultState;
export const mutations = {
  resetState(state) {
    const initState = getDefaultState();
    Object.keys(initState).forEach((key) => (state[key] = initState(key)));
  },
  setContent(state, payload) {
    state.items = payload.data;
    state.subtotal = payload.subtotal;
    state.total = payload.total;
  },
};

