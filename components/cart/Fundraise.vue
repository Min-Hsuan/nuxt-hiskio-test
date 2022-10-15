<template>
  <li
    class="shadow shadow-gray-200 rounded-md bg-white overflow-hidden py-3 md:py-0 px-2.5 md:px-0 grid grid-cols-[140px_1fr] gap-2 md:block"
  >
    <div class="relative items-center flex md:block">
      <img
        :src="item.image"
        :alt="item.title"
        class="rounded-lg md:rounded-none overflow-hidden"
      />
      <div class="absolute right-2 bottom-2 space-x-3 hidden md:block">
        <button>
          <img
            src="/Icon material-bookmark-border.svg"
            alt="收藏"
            class="inline-block"
          />
        </button>
        <button @click="purchase(item.id)">
          <img
            src="/Icon awesome-shopping-cart.svg"
            alt="購物車"
            class="inline-block"
          />
        </button>
      </div>
    </div>
    <p
      class="text-base md:text-xl text-ellipsis overflow-hidden font-medium md:p-3 text-[#454545] order-3 md:order-2 col-span-2"
    >
      {{ item.title }}
    </p>
    <div class="md:px-3 md:pb-3 order-2 md:order-3 relative">
      <div class="flex items-center absolute md:static right-0 top-0">
        <img
          :src="item.lecturers[0].avatar"
          :alt="item.lecturers[0].username"
          width="37"
          height="37"
          class="w-[23px] h-[23px] md:w-[37px] md:h-[37px] rounded-full overflow-hidden"
        />
        <p class="text-gray-500 hidden md:inline-block ml-2.5">
          {{ item.lecturers[0].username }}
        </p>
      </div>
      <div class="flex justify-between text-gray-600 my-1.5">
        <span class="text-sm hidden md:block">剩 {{ leftDay }} 天</span>
        <span class="text-sm">已募資{{ progress }}</span>
      </div>
      <div
        class="bg-[#F0F0F0] rounded-xl h-1.5 md:h-2.5 w-[70px] md:w-full my-4 md:my-0 overflow-hidden"
      >
        <span
          class="h-full bg-hiskio-red rounded-xl block"
          :class="`w-[${progress}]`"
        ></span>
      </div>
      <div class="font-arabic mt-2.5 text-sm">
        <span class="md:text-[22px] text-gray-700 font-medium"
          >${{ item.price | currency }}</span
        >
        <span class="md:text-sm text-gray-400 ml-1"
          >${{ item.fixed_price | currency }}</span
        >
      </div>
    </div>
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
  computed: {
    progress() {
      return (
        (
          (this.item.consumers / this.item.fundraising_tickets) *
          100
        ).toFixed() + "%"
      );
    },
    leftDay() {
      const matchedIndex = this.item.prices.findIndex(
        (item) => item.price === this.item.price
      );
      const current = new Date().getTime();
      if (matchedIndex) {
        const deadTime = this.item.prices[matchedIndex + 1].schedule_at;
        return Math.ceil(
          (new Date(deadTime).valueOf() - current) / 3600 / 1000 / 24
        );
      }
      return 0;
    },
  },
  methods: {
    ...mapActions({
      purchase: "cart/toggleItem",
    }),
  },
};
</script>

<style></style>
