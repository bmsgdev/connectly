<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>queryCollection("blog").all());
</script>

<template>
  <UContainer>
    <UBlogList>
      <UBlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :authors="post.auteurs"
        :image="post.image"
        :date="formatDate(post.date)"
        :post="post"
        :badge="{...post.badge,variant:'outline'}"
        orientation="horizontal"
      >
      </UBlogPost>
    </UBlogList>
  </UContainer>
</template>

<style scoped></style>
