<template>
  <div class="">
    <header class="text-gray-600 relative">
      <Notify
        v-if="$store.state.notify.type"
        class="fixed top-2 translate-x-[-50%] left-2/4"
      />
      <HeaderPc @action="setActionType" />
      <HeaderMobile @action="setActionType" />
      <HeaderAuthCard
        v-if="cardOpened"
        @close="() => (cardOpened = false)"
        :type="actionType"
        class="fixed top-0 left-0"
        @type="getTypeValue"
      />
    </header>
    <main>
      <Nuxt />
    </main>
    <footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      cardOpened: false,
      actionType: 1,
    };
  },
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      avatar: (state) => state.user.avatar,
      name: (state) => state.user.name,
    }),
  },
  methods: {
    setActionType(val) {
      this.actionType = val;
      this.cardOpened = true;
    },
    getTypeValue(val) {
      this.actionType = val;
    },
  },
  mounted() {
    const cartItems = localStorage.getItem("items");
    cartItems &&
      JSON.parse(cartItems).length > 0 &&
      !this.token &&
      this.$store.commit("cart/setItems", JSON.parse(cartItems));
  },
};
</script>

<style></style>
