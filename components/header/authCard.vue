<template>
  <div
    class="w-full h-screen relative flex flex-col justify-center bg-white px-16 py-4 md:max-h-[500px] md:rounded-3xl md:shadow-md md:shadow-gray-200"
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
    <ul class="flex justify-evenly space-x-4 mb-5">
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
        @click="changeTabHandler(tab.value)"
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
    <div v-if="activeTab === 1" class="">
      <ul class="space-y-3">
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/facebook.svg"
            alt="facebook"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left">使用 Facebook 登入</span>
        </li>
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/google.svg"
            alt="google"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left">使用 Google 登入</span>
        </li>
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/github.svg"
            alt="github"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left">使用 Github 登入</span>
        </li>
        <li class="border rounded-md border-gray-400 py-2.5 text-center">
          <img
            src="/linkedin.svg"
            alt="linkedin"
            width="28"
            height="28"
            class="inline-block align-middle mr-3"
          />
          <span class="min-w-[150px] inline-block text-left">使用 LinkedIn 登入</span>
        </li>
      </ul>
      <div class="mt-6">
        <p class="text-center mb-5">
          使用 HiSKIO ID 登入
        </p>
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
      <div class="mt-5 mb-6">
        <input v-model="confirm" type="checkbox" />
        <span>登入註冊即代表您同意使用者及隱私權政策</span>
      </div>
      <button
        class="px-4 py-2 bg-primary rounded text-white w-full mb-5"
        @click="loginHandler"
      >
        登入
      </button>
      <button class="text-gray-500 text-center w-full">
        忘記密碼
      </button>
    </div>
    <!-- 註冊 -->
    <div v-else class="">
      <p>註冊</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 1,
      password: null,
      account: null,
      confirm: false
    }
  },
  methods: {
    changeTabHandler (val) {
      this.$emit('tab', val)
    },
    async loginHandler () {
      const { status, data ,message } = await this.$api.auth.login({
        account: this.account,
        password: this.password,
        confirm: this.confirm
      })
      if(status === 200){
        this.$store.commit('notify/setMessage',{type:'success', message: '登入成功'})
        this.$store.commit('user/setToken',{token: data.access_token, token_type: data.token_type})
      }
      if(status === 400 && message){
        this.$store.commit('notify/setMessage',{type:'error', message: message['account'][0]})
      }
      console.log(status, data)
    }
  }
}
</script>
