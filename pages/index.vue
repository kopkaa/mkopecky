<template>
  <div id="landingPage" class="bg-white flex flex-col grow font-sans">
    <header
      class="px-8 container items-center sm:items-start mx-auto flex sm:flex-row h-[calc(100vh-80px)]"
    >
      <div
        class="self-start mt-32 sm:w-1/2 sm:text-left sm:mt-8 sm:self-center md:items-start flex flex-col text-center"
      >
        <h1
          class="uppercase text-4xl text-blue-900 font-bold leading-none tracking-wide mb-2"
        >
          Technické zařízení budov
        </h1>
        <h2
          class="uppercase text-2xl text-orange-500 text-secondary tracking-widest mb-6"
        >
          PROJEKT KOPECKÝ s.r.o
        </h2>
        <p class="text-gray-600 leading-relaxed mb-12">
          Projekt se zabývá projektovými prácemi v oblasti stavebnictví se
          zaměřením na vytápění, rozvod plynu a kanalizace. Zpracováváme
          kompletní soubor projektů TZB včetně průkazu energetické
          náročnosti budovy PENB.
        </p>
        <a
          href="#services"
          class="uppercase text-lg font-bold text-black hover:text-gray-500"
        >
          Více
        </a>
      </div>
      <div class="hidden md:block mb-16 mb-0 mt-8 mt-0 w-1/2 h-full sm:pl-12">
        <div class="landing-image" />
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
<style>
.landing-image {
  @apply w-3/5 h-3/4 mt-24 ml-[25%] bg-contain bg-no-repeat;
  background-repeat: no-repeat!important;
  background-size: contain !important;
  background: url('~assets/landing-image.png');
}
</style>
