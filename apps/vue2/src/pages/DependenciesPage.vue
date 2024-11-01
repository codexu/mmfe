<template>
  <div class="flex jucstify-center items-center flex-col">
    <h2>{{ name }}: {{ version }}</h2>
    <button class="btn" @click="$router.go(-1)">Back to Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      version: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.name = to.query.name
      vm.version = to.query.version
    })
  }
}
</script>
