<template>
  <div class="w-64 h-screen px-2 border-r border-gray-200 dark:border-gray-700">
    <ul class="menu">
      <li v-for="(app, index) in appsRoutes" :key="index">
        <router-link :class="app.name === route.name ? 'active' : ''" :to="app.path">{{ app.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, RouteRecordRaw, useRoute } from 'vue-router'

const router = useRouter()

const appsRoutes = ref<RouteRecordRaw[]>()

appsRoutes.value = router.getRoutes().find(route => route.name === 'apps')?.children

const route = useRoute()
</script>

<style lang="scss" scoped>

</style>
