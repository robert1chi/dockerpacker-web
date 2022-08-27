<script lang="ts" setup>
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  FormInst,
  useMessage,
} from "naive-ui";
import store from "@/store/index";
import { reactive, toRefs } from "vue";
import { systemLogin } from "@/utils/api/system";
import { useRouter } from "vue-router";

if (localStorage.getItem("session-token")) {
  localStorage.removeItem("session-token");
}

const router = useRouter();

const loginList = reactive({
  username: "",
  password: "",
});
const { username, password } = toRefs<{ username: string; password: string }>(
  loginList
);

const loginSubmit = () => {
  systemLogin(loginList).then((res) => {
    if (res.code === 0 && res.data.token) {
      router.push("/");
    } else {
    }
  });
};
</script>
<template>
  <div>
    <n-form>
      <n-form-item :label="$t('loginPage.username')">
        <n-input
          :value="username"
          :placeholder="$t('loginPage.usrplaceholder')"
        ></n-input>
      </n-form-item>
      <n-form-item :label="$t('loginPage.password')">
        <n-input
          :value="password"
          type="password"
          show-password-on="mousedown"
          :placeholder="$t('loginPage.pwdplaceholder')"
        ></n-input>
      </n-form-item>
    </n-form>
    <n-form inline>
      <n-form-item>
        <n-button type="primary" @click="loginSubmit">
          {{ $t("loginPage.login") }}
        </n-button>
      </n-form-item>
      <n-form-item>
        <n-button @click="loginSubmit">
          {{ $t("loginPage.register") }}
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
