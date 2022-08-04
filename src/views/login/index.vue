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

if (localStorage.getItem("session-token")) {
  localStorage.removeItem("session-token");
}

const loginSubmit = () => {
  console.log("loginSubmit");
};
</script>
<template>
  <div>
    <n-form>
      <n-form-item :label="`${$t('loginPage.username')}`">
        <n-input></n-input>
      </n-form-item>
      <n-form-item :label="`${$t('loginPage.password')}`">
        <n-input></n-input>
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
