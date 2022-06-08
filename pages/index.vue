<template>
  <div class="container mx-auto px-8 bg-white flex flex-col font-sans">
    <header
      class="flex sm:flex-row"
    >
      <div
        class="sm:w-1/2 flex flex-col sm:items-start text-center sm:text-left mt-36"
      >
        <h1
          class="uppercase text-4xl text-blue-900 font-bold leading-none tracking-wide mb-2"
        >
          Technické zařízení budov
        </h1>
        <h2
          class="uppercase text-2xl text-orange-500 text-secondary tracking-widest mb-6"
        >
          Martin Kopecký
        </h2>
        <p class="text-gray-600 leading-relaxed mb-12">
          Projekt se zabývá projektovými prácemi v oblasti stavebnictví se
          zaměřením na vytápění, rozvod plynu a kanalizace. Zpracováváme
          kompletní soubor projektů TZB včetně průkazu energetické
          náročnosti budovy PENB.
        </p>
        <a
          href="#"
          class="bg-purple-300 hover:bg-purple-400 uppercase text-lg font-bold text-black rounded-full"
        >
          Více
        </a>
      </div>
      <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-1/2 sm:pl-12">
        <!-- TODO: download IMG to local filesystem -->
        <div class="w-3/5 h-1/2 mt-24 ml-[25%] bg-[url('https://cdn-icons.flaticon.com/png/512/3993/premium/3993494.png?token=exp=1654715998~hmac=7dde70f012d9c85d87557f953865bb0b')] bg-contain bg-no-repeat" />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'custom'
})
</script>
