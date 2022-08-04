<script lang="ts" setup>
import { NButton, NForm, FormInst, useMessage } from "naive-ui";
import store from "@/store/index.js";

if(localStorage.getItem("session-token")) {
  localStorage.removeItem("session-token");
} 

const loginSubmit =()=>{
  console.log("loginSubmit"); 
}
</script>
<template>
  <div>
    <n-form>
      <n-form-item>
        <n-input></n-input>
      </n-form-item>
      <n-form-item>
        <n-input></n-input>
      </n-form-item>
    </n-form>
    <n-button type="primary" @click="loginSubmit
    ">Hello</n-button>
  </div>
</template>
