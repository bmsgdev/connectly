<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>queryCollection("blog").all());
const {data:first_post} = await useAsyncData("first_post", () =>queryCollection("blog").first());
</script>

<template>
  <UContainer>
    <UPageHeader v-if="first_post" v-bind="first_post" class="py-[50px]"></UPageHeader>
    <UBlogList>
      <UBlogPost
        v-for="(post,index) in posts"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :authors="post.auteurs"
        :image="post.image"
        :date="formatDate(post.date)"
        :post="post"
        :badge="{...post.badge,variant:'outline'}"
        :orientation="index % 2 === 0 ? 'vertical' : 'horizontal'"
        :to="post.path"
      >
      </UBlogPost>
    </UBlogList>
  </UContainer>
</template>

