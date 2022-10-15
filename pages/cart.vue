<template>
  <div class="text-gray-700">
    <div class="bg-[#FAFAFA] px-3.5">
      <div
        class="md:grid md:grid-cols-[1fr_380px] md:gap-4 max-w-[1200px] mx-auto md:py-[80px] pb-6 pt-5"
      >
        <div class="mb-[50px]">
          <h2 class="text-xl font-medium md:text-[1.375rem] mb-5">購物車</h2>
          <ul class="bg-white rounded-[10px] shadow-md shadow-gray-200">
            <li
              class="hidden md:grid md:grid-cols-[364px_75px_1fr_75px] text-gray-500 px-3 py-4 border-b border-gray-300"
            >
              <p>項目</p>
              <p class="text-center">售價</p>
              <p class="text-center">結帳金額</p>
              <p></p>
            </li>
            <template v-if="cartItems.length > 0">
              <CartItem
                v-for="(item, index) in cartItems"
                :key="index"
                :item="item"
              />
            </template>
          </ul>
        </div>
        <div class="">
          <h2 class="text-xl font-medium md:text-[1.375rem] mb-5">小計</h2>
          <div
            class="bg-white rounded-[10px] shadow-md shadow-gray-200 px-4 py-3"
          >
            <div class="">
              <label for="discount" class="text-gray-500 mb-3 block"
                >輸入折扣代碼</label
              >
              <div class="flex justify-between gap-3">
                <input
                  type="text"
                  id="discount"
                  class="rounded border border-gray-400 px-5 py-2 flex-grow"
                />
                <button class="bg-[#FFE5E5] text-hiskio-red px-5 py-2 rounded">
                  確定
                </button>
              </div>
              <button
                class="underline text-gray-600 text-lg flex items-center mt-5 md:pb-[85px] pb-[22px] border-b border-gray-300 w-full"
              >
                選擇抵用券 <img src="/arrow-down.svg" alt="箭頭" />
              </button>
              <div class="flex justify-between items-center my-4">
                <span class="text-gray-500">金額</span>
                <span>${{ subtotal | currency }}</span>
              </div>
              <p class="text-[28px] mt-[50px] mb-5 md:mt-5 md:mb-4 text-right">
                ${{ total | currency }}
              </p>
              <button class="text-white bg-hiskio-red rounded w-full py-2">
                前往結帳
              </button>
              <div class="text-gray-500 text-xs mt-3 mb-5">
                點擊上方按鈕即表示您已閱讀並同意<span class="underline"
                  >「 HiSKIO購買與退費政策」</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-5 pb-6 md:pb-[60px] md:pt-10 bg-[#F5F5F5] px-3.5">
      <h2
        class="text-xl font-medium md:text-[1.375rem] mb-5 max-w-[1200px] mx-auto"
      >
        募資課程
      </h2>
      <ul
        class="md:grid md:grid-cols-4 md:gap-4 max-w-[1200px] mx-auto pb-5 md:pb-16 space-y-3 md:space-y-0"
      >
        <CartFundraise
          v-for="fundraise in fundraiseData"
          :key="fundraise.id"
          :item="fundraise"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  filters: {
    currency(val) {
      return val.toLocaleString("en-US");
    },
  },
  async asyncData({ $api, store }) {
    let fundraiseData = [];
    if (store.state.fundraise.length === 0) {
      const { data } = await $api.course.fundraise();
      if (data) {
        store.commit("setFundraise", data);
      }
      fundraiseData = data;
    } else {
      fundraiseData = store.state.fundraise;
    }
    return { fundraiseData };
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.cart.items,
      subtotal: (state) => state.cart.subtotal,
      total: (state) => state.cart.total,
      token: (state) => state.user.token,
    }),
  },
  async fetch() {
    await this.getCartItems();
  },
  watch: {
    async token(newVal, oldVal) {
      if (newVal) {
        await this.getCartItems();
      }
    },
  },
  methods: {
    async getCartItems() {
      const { data } = await this.$api.cart.get();
      data && (await this.$store.commit("cart/setItems", data.data));
      await this.$store.dispatch("cart/calcAmount");
    },
  },
};
</script>

<style></style>
