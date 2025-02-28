<script setup lang="ts">
const route= useRoute();
const { data: post } = await useAsyncData("post", () => queryCollection("blog").path(route.path).first());
</script>
<template>
    <UBlogPost
    v-if="post"
        :title="post.title"
        :description="post.description"
        :authors="post.auteurs"
        :image="post.image"
        :date="formatDate(post.date)"
        :post="post"
        :badge="{...post.badge,variant:'outline'}"
        :to="post.path"
      >
      </UBlogPost>
</template>

<style scoped></style>