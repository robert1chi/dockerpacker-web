<script lang="ts" setup>
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
  FormInst,
  useMessage,
} from "naive-ui";
import store from "@/store/index.js";
import { ref } from "vue";
import { systemLogin } from "@/utils/api/system";

if (localStorage.getItem("session-token")) {
  localStorage.removeItem("session-token");
}

const loginList = {
  username: ref<string>(""),
  password: ref<string>(""),
};

const message = useMessage();

const loginSubmit = () => {
  systemLogin({
    username: loginList.username.value,
    password: loginList.password.value,
  }).then((res) => {
    if(res.code===0){

    }
    else {
      message.error(res.msg);
    }
  });
};
</script>
<template>
  <div>
    <n-form>
      <n-form-item :label="`${$t('loginPage.username')}`">
        <n-input v-model="loginList.username"></n-input>
      </n-form-item>
      <n-form-item :label="`${$t('loginPage.password')}`">
        <n-input v-model="loginList.password"></n-input>
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
