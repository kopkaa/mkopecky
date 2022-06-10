<template>
  <div id="landingPage" class="bg-white flex flex-col grow font-sans">
    <header
      class="px-8 container items-center sm:items-start mx-auto flex sm:flex-row h-[calc(100vh-80px)]"
    >
      <div
        class="sm:w-1/2 flex flex-col sm:items-start text-center sm:text-left sm:mt-48"
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
          href="#aboutUs"
          class="uppercase text-lg font-bold text-black hover:text-gray-500"
        >
          Více
        </a>
      </div>
      <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-1/2 sm:pl-12">
        <!-- TODO: download IMG to local filesystem -->
        <div class="w-3/5 h-3/4 mt-24 ml-[25%] bg-[url('https://cdn-icons-png.flaticon.com/512/4752/4752773.png')] bg-contain bg-no-repeat" />
      </div>
    </header>
    <Services />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'custom'
})
</script>
