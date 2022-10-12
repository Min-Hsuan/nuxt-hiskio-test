<template>
  <header class="md:flex md:justify-between md:py-4">
    <div class="flex items-center">
      <nuxt-link to="/">
        <h1 class="hidden">HiSKIO</h1>
        <img src="/hiskio.svg" alt="hiskio" />
      </nuxt-link>
      <img src="/徵才header-01 7.png" alt="徵才中" width="80" height="40" />
      <nuxt-link to="#" class="flex items-center">
        <img src="/course-grid.svg" alt="" />
        <span>課程</span>
      </nuxt-link>
      <div class="flex items-center">
        <img src="/search.svg" alt="搜尋" />
        <input type="text" placeholder="搜尋" />
      </div>
    </div>
    <nav>
      <ul class="flex items-center">
        <li>我想開課</li>
        <li>
          <nuxt-link to="/cart">
            <img src="/cart.svg" alt="購物車" />
          </nuxt-link>
        </li>
        <template>
          <li>
            <button class="px-4 py-1 border-primary rounded-sm text-hiskio-red">
              登入
            </button>
          </li>
          <li>
            <button class="px-4 py-1 bg-primary rounded-sm text-white">
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
  </header>
</template>

<script>
export default {};
</script>

<style></style>
