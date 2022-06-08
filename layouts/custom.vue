<template>
  <main class="w-full flex flex-col h-full bg-white min-h-screen">
    <Navigation />
    <Nuxt />
    <Footer />
  </main>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
