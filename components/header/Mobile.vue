<template lang="">
  <div class="">
    <div
      class="flex items-center md:hidden space-x-3 py-5 px-3.5 shadow-md shadow-gray-200 relative z-10"
    >
      <nuxt-link to="/">
        <h1 class="hidden">HiSKIO</h1>
        <img src="/hiskio.svg" alt="hiskio" />
      </nuxt-link>
      <button class="flex-grow">
        <img src="/search.svg" alt="搜尋" />
      </button>
      <nuxt-link to="/cart"
        ><img src="/cart.svg" alt="購物車" width="20" height="20"
      /></nuxt-link>
      <button class="" @click="() => (menuIsOpen = !menuIsOpen)">
        <img
          v-if="!menuIsOpen"
          src="/icon-menu.svg"
          alt="漢堡選單"
          width="18"
          height="18"
        />
        <img
          v-if="menuIsOpen"
          src="/close.svg"
          alt="關閉選單"
          width="16"
          height="16"
        />
      </button>
    </div>
    <nav v-if="menuIsOpen" class="w-full h-[calc(100vh-60px)] bg-white">
      <!-- user 頭像 -->
      <ul class="bg-[#EFF5F8] pb-4" v-if="token">
        <li
          class="flex items-center border-b border-gray-300 pt-10 pb-8 mx-3.5"
        >
          <img :src="avatar" alt="" width="40" height="40" />
          <span class="font-medium ml-5">{{ name }}</span>
        </li>
        <li>
          <nuxt-link to="#" class="active:bg-white block py-4 px-3.5 mt-4">
            我的課程
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="active:bg-white block py-4 px-3.5">
            我的抵用券
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="active:bg-white block py-4 px-3.5">
            任務板
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="active:bg-white block py-4 px-3.5">
            訂單記錄
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="active:bg-white block py-4 px-3.5">
            帳戶設定
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="active:bg-white block py-4 px-3.5">
            我開設的課
          </nuxt-link>
        </li>
      </ul>
      <ul
        class="py-4 relative after:w-[calc(100%-1.75rem)] after:h-[1px] after:bg-gray-300 after:absolute after:bottom-0 after:left-2/4 after:translate-x-[-50%]"
      >
        <li>
          <nuxt-link to="#" class="active:bg-gray-100 block py-4 px-3.5">
            探索課程
          </nuxt-link>
        </li>
        <li v-if="!token">
          <nuxt-link to="#" class="active:bg-gray-100 block py-4 px-3.5">
            企業方案
          </nuxt-link>
        </li>
      </ul>
      <template v-if="!token">
        <button
          @click="() => $emit('action', 1)"
          class="active:bg-gray-100 block mt-4 py-4 px-3.5 text-left w-full"
        >
          登入
        </button>
        <button
          @click="() => $emit('action', 2)"
          class="active:bg-gray-100 mb-4 text-primary font-medium block py-4 px-3.5 text-left w-full"
        >
          註冊
        </button>
      </template>
      <template v-else>
        <button
          class="active:bg-gray-100 block my-4 py-4 px-3.5 w-full text-left"
          @click="logoutHandler('已登出')"
        >
          登出
        </button>
      </template>
    </nav>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      avatar: (state) => state.user.avatar,
      name: (state) => state.user.name,
    }),
  },
  data() {
    return {
      menuIsOpen: false,
    };
  },
  methods: {
    ...mapActions({
      logoutHandler: "user/logout",
    }),
  },
};
</script>
<style lang=""></style>
