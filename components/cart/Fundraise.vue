<template>
  <li
    class="shadow shadow-gray-200 rounded-md bg-white overflow-hidden py-3 md:py-0 px-2.5 md:px-0 grid grid-cols-[140px_1fr] gap-2 md:block"
  >
    <div class="relative items-center flex md:block">
      <img
        src="https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6ImNvdXJzZXNcL2VlaWNkN28yc2hnbXRldSIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH19fQ=="
        alt=""
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
        <button>
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
      NUXT.js 前端開發實戰手冊前端開發前端開發前
    </p>
    <div class="md:px-3 md:pb-3 order-2 md:order-3 relative">
      <div class="flex items-center absolute md:static right-0 top-0">
        <img
          src="https://thumbnails.f5ezcode.in/eyJidWNrZXQiOiJjZG4uaGlza2lvLmNvbSIsImtleSI6InVzZXJzXC9LdDhNUFBSandSUkgwdVhOLnBuZyIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5Ijo4MH19fQ=="
          alt=""
          width="37"
          height="37"
          class="w-[23px] md:w-[37px]"
        />
        <p class="text-gray-500 hidden md:inline-block ml-2.5">Chris</p>
      </div>
      <div class="flex justify-between text-gray-600 my-1.5">
        <span class="text-sm hidden md:block">剩 3 天</span>
        <span class="text-sm">已募資255%</span>
      </div>
      <div
        class="bg-[#F0F0F0] rounded-xl h-1.5 md:h-2.5 w-[70px] md:w-full my-4 md:my-0"
      >
        <span class="h-full bg-hiskio-red rounded-xl w-3/4 block"></span>
      </div>
      <div class="font-arabic mt-2.5 text-sm">
        <span class="md:text-[22px] text-gray-700 font-medium">$1,500</span>
        <span class="md:text-sm text-gray-400 ml-1">$5,000</span>
      </div>
    </div>
  </li>
</template>

<script>
export default {};
</script>

<style></style>
