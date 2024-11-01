<template>
  <div class="flex jucstify-center items-center flex-col">
    <div class="avatar">
      <div class="w-24 rounded">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
    </div>
    <router-link to="/vue2"></router-link>
    <h1 class="font-bold text-2xl my-4">Vue2 App</h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>dependencies</th>
              <th>version</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in dependencies" :key="index">
              <td>
                <router-link class="btn-link" :to="{
                  name: 'Dependencies',
                  query: { name: item.name, version: item.version }
                }">{{ item.name }}</router-link>
              </td>
              <td>{{ item.version }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>devDependencies</th>
              <th>version</th>
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

<script>
import pkg from '../../package.json'

const dependencies = Object.keys(pkg.dependencies).map((key) => {
  return {
    name: key,
    version: pkg.dependencies[key]
  }
})

const devDependencies = Object.keys(pkg.devDependencies).map((key) => {
  return {
    name: key,
    version: pkg.devDependencies[key]
  }
})

export default {
  name: 'HomePage',
  data() {
    return {
      dependencies,
      devDependencies
    }
  }
}
</script>