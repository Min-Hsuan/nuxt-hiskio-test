<template>
  <div class="">
    <h1>cart</h1>
    <ul v-if="cartItems.length > 0">
      <CartItem v-for="(item, index) in cartItems" :key="index" :item="item" />
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      cartItems: (state) => state.cart.items,
      subtotal: (state) => state.cart.subtotal,
      total: (state) => state.cart.total,
    }),
  },
  async fetch() {
    const { data } = await this.$api.cart.get();
    data && (await this.$store.commit("cart/setContent", data));
  },
};
</script>

<style></style>
