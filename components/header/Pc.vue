<template lang="">
  <div class="hidden md:block px-3.5 py-[9px] shadow-md shadow-gray-200">
    <div class="max-w-[1200px] mx-auto md:flex justify-between">
      <div class="flex items-center space-x-4">
        <nuxt-link to="/">
          <h1 class="hidden">HiSKIO</h1>
          <img src="/hiskio.svg" alt="hiskio" width="100" height="15" />
        </nuxt-link>
        <img
          src="/徵才header-01 7.png"
          alt="徵才中"
          width="80"
          height="40"
          v-show="!token"
        />
        <nuxt-link to="#" class="flex items-center" v-show="!token">
          <img src="/course-grid.svg" alt="" class="mr-1.5" />
          <span>課程</span>
        </nuxt-link>
        <div class="flex items-center text-gray-400">
          <img src="/search.svg" alt="搜尋" />
          <input
            type="text"
            placeholder="搜尋"
            class="text-gray-400 px-1.5 py-2"
          />
        </div>
      </div>
      <nav>
        <ul class="flex items-center space-x-4">
          <li>我想開課</li>
          <template v-if="!token">
            <li>
              <nuxt-link to="/cart">
                <img src="/cart.svg" alt="購物車" width="20" height="20" />
              </nuxt-link>
            </li>
            <li>
              <button
                class="px-4 py-1 border border-primary rounded-md text-primary"
                @click="() => $emit('action', 1)"
              >
                登入
              </button>
            </li>
            <li>
              <button
                class="px-4 py-1 bg-primary rounded-md text-white"
                @click="() => $emit('action', 2)"
              >
                註冊
              </button>
            </li>
          </template>
          <template v-else>
            <li>我的學習</li>
            <nuxt-link to="/cart">
              <img src="/cart.svg" alt="購物車" width="16" height="16" />
            </nuxt-link>
            <!-- user 頭像 -->
            <img :src="avatar" width="32" height="32" />
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      token: (state) => state.user.token,
      avatar: (state) => state.user.avatar,
      name: (state) => state.user.name,
    }),
  },
};
</script>
<style lang=""></style>
