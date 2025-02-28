<script setup lang="ts">
const {data:homepage} =  await useAsyncData(() =>queryCollection('webpages').first())
</script>

<template>
    <div>
       <ContentRenderer v-if="homepage" :value="homepage" />
       <div v-else>Page non trouvé</div>
    </div>
</template>

<style scoped></style>