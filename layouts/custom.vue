<template>
  <main id="mainContent" class="w-full flex flex-col h-full min-h-screen">
    <a id="top" />
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
