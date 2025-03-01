<script setup lang="ts">

const navigation = inject<Ref<any[]>>('navigation', ref([]))

const links = [{
  label: 'Home',
  icon: 'simple-icons:homeadvisor',
  to: '/'
}, {
  label: 'Blogs',
  icon: 'simple-icons:mdbook',
  to: '/blog'
}]
</script>

<template>
  <UHeader :links="links">
    <template #left>
      <UIcon name="simple-icons:devdotto" class="h-6 w-auto shrink-0"/>
    </template>
    <template #right>
    </template>
  </UHeader>
</template>

