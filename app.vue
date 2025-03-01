<script lang="ts" setup>
const {data:navigation} = await useAsyncData("navigation", () => queryCollectionNavigation("blog"));
provide('navigation',navigation);
</script>
<template>
  <NuxtLayout> <NuxtPage /> </NuxtLayout>
</template>
