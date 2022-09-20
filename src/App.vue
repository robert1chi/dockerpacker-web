<script setup lang="ts">
import {
  NMessageProvider,
  NConfigProvider,
  useOsTheme,
  darkTheme,
} from "naive-ui";
import { useMutationObserver } from "@vueuse/core";
import { computed } from "vue";

const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
// Fix the issue of Tailwind CSS and Naive UI
useMutationObserver(
  document.head,
  () => {
    const naiveStyles = Array.from(
      document.head.querySelectorAll("style[cssr-id]")
    );

    if (
      naiveStyles.find((style) =>
        style.nextElementSibling
          ? !style.nextElementSibling.hasAttribute("cssr-id")
          : false
      )
    ) {
      naiveStyles.forEach((style) => {
        document.head.appendChild(style);
      });
    }
  },
  {
    childList: true,
  }
);
</script>

<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>
