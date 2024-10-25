<template>
  <div class="flex jucstify-center items-center flex-col">
    <div class="grid grid-cols-2 gap-4">
      <div class="avatar">
        <div class="w-24 rounded">
          <img alt="Vue logo" src="./assets/vue.svg" />
        </div>
      </div>
      <div class="avatar">
        <div class="w-24 rounded">
          <img alt="Vue logo" src="/vite.svg" />
        </div>
      </div>
    </div>
    <h1 class="font-bold text-2xl my-4">Vue3 App</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>Dependencies</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in dependencies" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.version }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>DevDependencies</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in devDependencies" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.version }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import pkg from '../package.json'

const dependencies = Object.keys(pkg.dependencies).map((key) => {
  return {
    name: key,
    version: (pkg.dependencies as { [key: string]: string })[key]
  }
})

const devDependencies = Object.keys(pkg.devDependencies).map((key) => {
  return {
    name: key,
    version: (pkg.devDependencies as { [key: string]: string })[key]
  }
})
</script>