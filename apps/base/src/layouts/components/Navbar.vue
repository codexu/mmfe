<template>
  <div class="navbar bg-base-100 border-b border-gray-200 dark:border-gray-700">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ThemeController />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeController from './ThemeController.vue'
</script>

<style lang="scss" scoped>

</style>
