<template>
  <label class="swap swap-rotate btn btn-ghost btn-circle">
    <input type="checkbox" class="theme-controller" value="synthwave" data-toggle-theme="light,dark" />
    <SunIcon class="swap-off h-6 w-6 fill-current" />
    <MoonIcon class="swap-on h-6 w-6 fill-current" />
  </label>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { themeChange } from 'theme-change'
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

onMounted(() => {
  themeChange(false)
})
</script>

<style lang="scss" scoped>

</style>
