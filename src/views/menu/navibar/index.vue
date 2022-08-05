<script lang="ts" setup>
import { ref, reactive } from "vue";

const title = ref("");
</script>
<template>
    <div class="nav">
        <div class="logo">
            
        </div>
        <div class="icon-list">

        </div>
    </div>
</template>

<style lang="scss" scoped>
.nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .logo{
        left:0;
    }
    .icon-list{
        right:0;
    }
}

</style>