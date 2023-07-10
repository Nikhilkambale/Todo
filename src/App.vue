<template>
  <header>
    <navbar />
  </header>
<router-view/>
</template>

<script>
import navbar from './components/nav.vue'
export default {
  name: "app",
  components: {
    navbar
  },
}
</script>

<style>
body{
  background-color: rgb(16, 17, 17);
}
</style>