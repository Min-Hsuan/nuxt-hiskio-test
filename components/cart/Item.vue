<template lang="">
  <li
    class="grid px-3.5 py-2.5 grid-cols-[62px_1fr_60px] md:grid-cols-[120px_220px_75px_1fr_75px] gap-3 md:py-5 md:px-3 border-b border-gray-200 md:border-gray-300"
  >
    <img
      :src="item.image"
      :alt="item.name"
      class="order-1 rounded-[4px] md:rounded-md"
    />
    <p class="text-gray-600 order-2 text-sm md:text-base">
      {{ item.name }}
    </p>
    <span
      class="text-gray-500 text-[0.8125rem] md:text-lg text-left md:text-center md:self-center order-4 md:order-3"
      >{{ item.subtotal | currency }}</span
    >
    <span
      class="text-gray-600 text-[0.9375rem] md:text-[1.375rem] text-right md:text-center md:self-center order-5 col-span-2 mr-4 md:mr-0 md:col-span-1 md:order-4"
      >{{ item.total | currency }}</span
    >
    <button
      class="text-center order-3 md:order-4 md:mr-0"
      @click="deleteHandler(item.id)"
    >
      <img
        src="/trash.svg"
        alt="刪除"
        width="24"
        height="24"
        class="inline-block"
      />
    </button>
  </li>
</template>
<script>
import { mapActions } from "vuex";
export default {
  filters: {
    currency(val) {
      return val.toLocaleString("en-US");
    },
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      deleteHandler: "cart/deleteItem",
    }),
  },
};
</script>
<style lang=""></style>
