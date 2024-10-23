<template>
  <div class="navbar bg-base-100 border-b border-gray-200 dark:border-gray-700">
    <div class="flex-1">
    </div>
    <div class="flex-none">
      <ThemeController />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeController from './ThemeController.vue'
import UserInfo from './UserInfo.vue'
</script>

<style lang="scss" scoped>

</style>
