<template>
  <div class="w-full h-screen flex justify-center items-center">
    <h1 class="text-5xl text-orange-500">{{ props.name }}</h1>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>
