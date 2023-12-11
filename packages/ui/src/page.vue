<template>
  <div class="w-full h-screen flex justify-center items-center flex-col">
    <h1 class="text-5xl text-orange-500">{{ props.name }}</h1>
    <p class="text-xs">APP_TITLE: {{ props.envs.APP_TITLE }}</p>
    <p class="text-xs">APP_DESCRIPTION: {{ props.envs.APP_DESCRIPTION }}</p>
    <p class="text-xs">APP_BASE_API_URL: {{ props.envs.APP_BASE_API_URL }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
  envs: {
    APP_TITLE: string
    APP_DESCRIPTION: string
    APP_BASE_API_URL: string
  }
}>()
</script>
