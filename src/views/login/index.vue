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
import store from "@/store/index";
import { reactive, toRefs, onBeforeUnmount } from "vue";
import { systemLogin } from "@/utils/api/system";
import { useRouter } from "vue-router";
import i18n from "@/i18n";

if (localStorage.getItem("session-token")) {
  localStorage.removeItem("session-token");
}

const router = useRouter();
const message = useMessage();

const loginList = reactive({
  username: "",
  password: "",
});
const { username, password } = toRefs<{ username: string; password: string }>(
  loginList
);

const loginSubmit = () => {
  systemLogin(loginList)
    .then((res) => {
      if (res.code === 0 && res.data.token) {
        router.push("/");
      } else {
        console.log(res);
        message.error(i18n.global.t(res.msg ?? ""));
      }
    })
    .catch((err) => {
      message.error(i18n.global.t(err.msg ?? ""));
    });
};
document.getElementsByTagName("body")[0].className = "active";
onBeforeUnmount(() => {
  document.body.classList.remove("active");
});
</script>
<template>
  <div
    class="w-[100vw] h-[100vh] flex items-center content-center justify-center login-bg"
  >
    <!-- <canvas class="w-[100vw] h-[100vh] absolute z-0" id="login-canvas">
      It seems that your browser does not support canvas.
    </canvas> -->
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
