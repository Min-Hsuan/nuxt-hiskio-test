<template>
  <div
    class="px-5 py-1 rounded-sm bg-white shadow-gray-200 shadow-sm text-center text-gray-700 z-50 w-[calc(100%-1rem)] md:w-full md:max-w-[80%] border opacity-90"
    :class="{
      'border-green-500 bg-green-100': type === 'success',
      'border-red-500 bg-red-100': type === 'error',
    }"
  >
    {{ message }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      message: (state) => state.notify.message,
      type: (state) => state.notify.type,
    }),
  },
  created() {
    setTimeout(() => {
      this.$store.commit("notify/setMessage", { type: null, message: null });
    }, 2000);
  },
};
</script>

<style></style>
