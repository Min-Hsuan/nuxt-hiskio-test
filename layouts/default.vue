<template>
  <header class="text-gray-600">
    <!-- pc -->
    <div class="hidden md:flex justify-between px-3.5 py-4 shadow-md shadow-gray-200">
      <div class="flex items-center space-x-4">
        <nuxt-link to="/">
          <h1 class="hidden">
            HiSKIO
          </h1>
          <img src="/hiskio.svg" alt="hiskio" width="100" height="15" />
        </nuxt-link>
        <img src="/徵才header-01 7.png" alt="徵才中" width="80" height="40" />
        <nuxt-link to="#" class="flex items-center">
          <img src="/course-grid.svg" alt="" />
          <span>課程</span>
        </nuxt-link>
        <div class="flex items-center text-gray-400">
          <img src="/search.svg" alt="搜尋" />
          <input type="text" placeholder="搜尋" />
        </div>
      </div>
      <nav>
        <ul class="flex items-center space-x-4">
          <li>我想開課</li>
          <li>
            <nuxt-link to="/cart">
              <img src="/cart.svg" alt="購物車" />
            </nuxt-link>
          </li>
          <template>
            <li>
              <button class="px-4 py-1 border border-primary rounded-md text-primary" @click="setActionType('login')">
                登入
              </button>
            </li>
            <li>
              <button class="px-4 py-1 bg-primary rounded-md text-white" @click="setActionType('register')">
                註冊
              </button>
            </li>
          </template>
          <template>
            <!-- user 頭像 -->
            <div class="overflow-hidden rounded-full">
              <img src="" alt="" />
            </div>
          </template>
        </ul>
      </nav>
    </div>
    <div class="flex items-center md:hidden space-x-3 py-5 px-3.5 shadow-md shadow-gray-200">
      <nuxt-link to="/">
        <h1 class="hidden">
          HiSKIO
        </h1>
        <img src="/hiskio.svg" alt="hiskio" />
      </nuxt-link>
      <div class="flex-grow">
        <img src="/search.svg" alt="搜尋" />
      </div>
      <img src="/cart.svg" alt="購物車" width="20" height="20" />
      <div class="" @click="()=>menuIsOpen = !menuIsOpen">
        <img v-if="!menuIsOpen" src="/icon-menu.svg" alt="漢堡選單" width="18" height="18" />
        <img v-if="menuIsOpen" src="/close.svg" alt="關閉選單" width="16" height="16" />
      </div>
    </div>
    <nav v-if="menuIsOpen">
      <!-- user 頭像 -->
      <ul class="bg-[#EFF5F8] pt-8 px-3.5 space-y-8">
        <li class="">
          <div class="overflow-hidden rounded-full">
            <img src="" alt="" />
          </div>
          <span>某某某</span>
        </li>
        <li>
          <nuxt-link to="#">
            我的課程
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            我的抵用券
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            任務板
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            訂單記錄
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            帳戶設定
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="#">
            我開設的課
          </nuxt-link>
        </li>
      </ul>
      <ul>
        <li>
          <nuxt-link to="#">
            探索課程
          </nuxt-link>
        </li>
      </ul>
      <button>登出</button>
    </nav>
    <HeaderAuthCard v-if="cardOpened" @close="()=>cardOpened = false" />
  </header>
</template>

<script>
export default {
  data () {
    return {
      menuIsOpen: false,
      cardOpened: false,
      actionType: 'login'
    }
  },
  methods: {
    setActionType (val) {
      this.actionType = val
      this.cardOpened = true
    }
  }
}
</script>

<style></style>
