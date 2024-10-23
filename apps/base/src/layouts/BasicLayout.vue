<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1">
      <Navbar />
      <div class="p-4">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss" scoped>

</style>
