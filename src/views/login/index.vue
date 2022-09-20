<script lang="ts" setup>
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  NCard,
  useMessage,
  NSpace,
} from "naive-ui";
import { reactive, toRefs, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { userStore } from "@/store/modules/user";

const router = useRouter();
const message = useMessage();
const i18n = useI18n();
const useUserStore = userStore();
const loginList = reactive({
  username: "",
  password: "",
});
const { username, password } = toRefs<{ username: string; password: string }>(
  loginList
);

const loginSubmit = async () => {
  try {
    await useUserStore.login({
      username: loginList.username,
      password: loginList.password,
    });
    router.push("/");
  } catch (err) {
    if (err instanceof Error) {
      message.error(i18n.t(err.message));
    }
  }
};
document.getElementsByTagName("body")[0].className = "active";
onBeforeUnmount(() => {
  document.body.classList.remove("active");
});
</script>
<template>
  <div
    class="w-screen h-screen flex items-center content-center justify-center login-bg"
  >
    <div class="w-[50%] z-10">
      <n-card>
        <n-form>
          <n-form-item :label="$t('loginPage.username')">
            <n-input
              v-model:value="username"
              :placeholder="$t('loginPage.usrplaceholder')"
            ></n-input>
          </n-form-item>
          <n-form-item :label="$t('loginPage.password')">
            <n-input
              v-model:value="password"
              type="password"
              show-password-on="mousedown"
              :placeholder="$t('loginPage.pwdplaceholder')"
            />
          </n-form-item>
        </n-form>
        <n-space justify="space-around" size="large">
          <n-button type="primary" @click="loginSubmit">
            {{ $t("loginPage.login") }}
          </n-button>
          <n-button @click="loginSubmit">
            {{ $t("loginPage.register") }}
          </n-button>
        </n-space>
      </n-card>
    </div>
  </div>
</template>
<style>
.active {
  background: linear-gradient(
    -45deg,
    #96e6a1,
    #d4fc79,
    #84fab0,
    #8fd3f4,
    #4facfe,
    #00f2fe,
    #96e6a1,
    #d4fc79,
    #84fab0,
    #8fd3f4,
    #4facfe,
    #00f2fe
  );
  background-size: 1000% 1000%;
  animation: gradient 15s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
