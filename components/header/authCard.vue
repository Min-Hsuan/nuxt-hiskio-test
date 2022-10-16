<template>
  <div
    class="w-full h-screen flex flex-col items-center bg-white px-16 py-4 md:rounded-3xl md:shadow-md md:shadow-gray-200 pt-10 z-30 md:py-10 md:w-auto md:h-auto md:absolute md:left-2/4 md:translate-x-[-50%] min-h-[500px] md:min-w-[450px] md:top-0 md:translate-y-[10%] overflow-hidden"
  >
    <button class="absolute right-5 top-5" @click="() => $emit('close')">
      <img src="/close.svg" alt="關閉" width="13" height="13" />
    </button>
    <img
      src="/hiskio.svg"
      alt="hiskio"
      width="120"
      height="18"
      class="mx-auto mb-8"
    />
    <ul class="flex justify-evenly space-x-4 mb-5 w-full">
      <li
        v-for="(tab, index) in [
          { value: 'login', text: '登入' },
          { value: 'register', text: '註冊' },
        ]"
        :key="index"
        class="text-gray-300 text-[2rem] text-center mx-4"
        :class="{
          '!text-primary border-b-4 border-primary': index + 1 === activeTab,
        }"
        @click="changeTabHandler(index + 1)"
      >
        <label
          class="block cursor-pointer"
          :for="`${_uid}${index}`"
          v-text="tab.text"
        ></label>
        <input
          :id="`${_uid}${index}`"
          v-model="activeTab"
          class="hidden"
          type="radio"
          :value="index + 1"
        />
      </li>
    </ul>
    <!-- 登入 -->
    <div v-if="activeTab === 1" class="w-full">
      <ul class="space-y-3">
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/facebook.svg"
            alt="facebook"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left"
            >使用 Facebook 登入</span
          >
        </li>
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/google.svg"
            alt="google"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left"
            >使用 Google 登入</span
          >
        </li>
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/github.svg"
            alt="github"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left"
            >使用 Github 登入</span
          >
        </li>
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/linkedin.svg"
            alt="linkedin"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left"
            >使用 LinkedIn 登入</span
          >
        </li>
      </ul>
      <div class="mt-6">
        <p class="text-center mb-5">使用 HiSKIO ID 登入</p>
        <div class="flex items-center bg-[#FAFAFA] rounded-md px-3 py-2.5 mb-2">
          <img src="/account.svg" alt="帳號" />
          <input
            v-model="account"
            type="text"
            placeholder="請輸入 HiSKIO ID"
            class="bg-[#FAFAFA] w-full p-1 ml-2"
          />
        </div>
        <div class="flex items-center bg-[#FAFAFA] rounded-md px-3 py-2.5">
          <img src="/lock.svg" alt="密碼" />
          <input
            v-model="password"
            type="password"
            placeholder="請輸入登入密碼"
            class="bg-[#FAFAFA] w-full p-1 ml-2"
          />
        </div>
      </div>
      <div class="mt-5 mb-6 text-gray-500">
        <input v-model="confirm" type="checkbox" />
        <p class="text-sm inline-block">
          登入註冊即代表您同意<span class="underline">使用者及隱私權政策</span>
        </p>
      </div>
      <button
        class="px-4 py-2 bg-primary rounded text-white w-full mb-5"
        @click="loginHandler"
      >
        登入
      </button>
      <button class="text-gray-500 text-center w-full">忘記密碼</button>
    </div>
    <!-- 註冊 -->
    <div v-else class="w-full">
      <p>註冊</p>
    </div>
    <span
      class="bg-[#E7F0F5] inline-block w-[200px] h-[200px] rounded-[50px] absolute rotate-[-120deg] overflow-hidden left-[-150px] top-[-80px]"
    ></span>
    <span
      class="border-hiskio-yellow border-[3px] inline-block w-[260px] h-[260px] rounded-[64px] absolute rotate-[-60deg] overflow-hidden left-[-240px] top-[-13px] opacity-20"
    ></span>
    <span
      class="bg-hiskio-yellow nline-block w-[193px] h-[193px] rounded-[64px] absolute rotate-[-120deg] overflow-hidden right-[-170px] bottom-[30%] opacity-20"
    ></span>
    <span
      class="border-primary border-[3px] inline-block w-[193px] h-[193px] rounded-[50px] absolute rotate-[-60deg] overflow-hidden right-[-190px] bottom-[40%] opacity-20"
    ></span>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      password: null,
      account: null,
      confirm: false,
    };
  },
  computed: {
    activeTab: {
      get() {
        return this.type;
      },
      set() {
        this.$emit("change", Number(event.target.value));
      },
    },
  },
  methods: {
    changeTabHandler(val) {
      this.$emit("type", val);
    },
    async loginHandler() {
      try {
        const response = await this.$api.auth.login({
          account: this.account,
          password: this.password,
          confirm: this.confirm,
        });
        if (response.status && response.status === 200) {
          this.$store.commit("notify/setMessage", {
            type: "success",
            message: "登入成功",
          });
          this.$emit("close");
          //store token in vuex and cookie
          const token = "Bearer" + " " + response.data.access_token;
          this.$store.commit("user/setToken", token);
          this.$cookies.set("auth-token", token, {
            expires: new Date(new Date().getTime() + response.data.expires_in),
            sameSite: "lax",
            secure: true,
          });
          //get user data
          await this.$store.dispatch("user/getInfo");
          const cartItems = this.$store.state.cart.items;
          // post localStorage items to api
          if (cartItems.length > 0) {
            const idArray = cartItems.reduce(
              (acc, item) => [...acc, { id: item.id, coupon: "" }],
              []
            );
            const addResponse = await this.$api.cart.add({
              items: idArray,
            });
            this.$store.commit("cart/setItems", addResponse.data.data);
            this.$store.dispatch("cart/calcAmount");
          }
        }
      } catch (error) {
        if (error.response) {
          this.$store.commit("notify/setMessage", {
            type: "error",
            message: error.response.data.message["account"][0],
          });
        }
      }
    },
  },
};
</script>
