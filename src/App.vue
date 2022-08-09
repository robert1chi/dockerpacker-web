<script setup lang="ts">
import { useMutationObserver } from '@vueuse/core';

// Fix the issue of Tailwind CSS and Naive UI
useMutationObserver(
  document.head,
  () => {
    const naiveStyles = Array.from(
      document.head.querySelectorAll('style[cssr-id]')
    );

    if (
      naiveStyles.find((style) =>
        style.nextElementSibling
          ? !style.nextElementSibling.hasAttribute('cssr-id')
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
  <router-view></router-view>
</template>
