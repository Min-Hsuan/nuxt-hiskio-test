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
    Object.assign(state, getDefaultState());
  },
  setItems(state, payload) {
    state.items = payload;
  },
  setAmount(state, payload) {
    state.subtotal = payload.subtotal;
    state.total = payload.total;
  },
};

export const actions = {
  calcAmount({ state, commit }) {
    let subtotal = 0;
    let total = 0;
    state.items.forEach((item) => {
      subtotal += item.subtotal;
      total += item.total;
    });
    commit("setAmount", { subtotal, total });
  },
  async toggleItem({ state, dispatch }, id) {
    const index = state.items.findIndex(
      (item) => Number(item.id) === Number(id)
    );
    //存在 則移除
    if (index >= 0) {
      await dispatch("deleteItem", id);
    } else {
      await dispatch("addItem", id);
    }
    dispatch("calcAmount");
  },
  async deleteItem({ commit, rootState, state, dispatch }, id) {
    const authorized = rootState.user.token;
    const showNotify = async () =>
      await commit(
        "notify/setMessage",
        {
          type: "success",
          message: "已從購物車移除",
        },
        { root: true }
      );
    // 未登入下
    if (!authorized) {
      const cartData = state.items.filter(
        (item) => Number(item.id) !== Number(id)
      );
      commit("setItems", cartData);
      const jsonData = JSON.stringify(cartData);
      localStorage.setItem("items", jsonData);
      dispatch("calcAmount");
      showNotify();
      return;
    }
    //登入下
    try {
      const response = await this.$api.cart.remove({
        items: [
          {
            id: id,
            coupon: "",
          },
        ],
        coupons: [],
      });
      if (response.status === 200) {
        showNotify();
        try {
          const cartResponse = await this.$api.cart.get();
          cartResponse && (await commit("setItems", cartResponse.data.data));
          dispatch("calcAmount");
        } catch (error) {}
      }
    } catch (error) {
      commit(
        "notify/setMessage",
        {
          type: "error",
          message: "oh!no~請稍後再試",
        },
        { root: true }
      );
    }
  },
  async addItem({ commit, rootState, state, dispatch }, id) {
    const authorized = rootState.user.token;
    const showNotify = async () =>
      await commit(
        "notify/setMessage",
        {
          type: "success",
          message: "已放入購物車",
        },
        { root: true }
      );
    try {
      const response = await this.$api.cart.add({
        items: [
          {
            id: id,
            coupon: "",
          },
        ],
        coupons: [],
      });
      if (response.status === 200) {
        showNotify();
        // 未登入下
        if (!authorized) {
          const newItems = [...response.data.data, ...state.items];
          commit("setItems", newItems);
          localStorage.setItem("items", JSON.stringify(newItems));
          dispatch("calcAmount");
          showNotify();
          return;
        }
        //登入下
        await commit("setItems", response.data.data);
        dispatch("calcAmount");
      }
    } catch (error) {
      commit(
        "notify/setMessage",
        {
          type: "error",
          message: "oh!no~請稍後再試",
        },
        { root: true }
      );
    }
  },
};
