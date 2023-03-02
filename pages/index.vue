<template>
  <div id="landingPage" class="bg-white flex flex-col grow font-sans">
    <header
      class="container items-center sm:items-start flex flex-wrap sm:flex-row h-[calc(100vh-80px)] max-w-none"
    >
      <div
        class="mt-32 sm:w-1/2 sm:text-left sm:mt-8 sm:self-end md:items-start flex flex-col text-center pl-[10%]"
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
      <div class="hidden md:block mb-16 mb-0 mt-8 mt-0 w-1/2 h-3/5 sm:pl-12">
        <div class="landing-image" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F0F9FF" fill-opacity="1" d="M0,256L48,250.7C96,245,192,235,288,234.7C384,235,480,245,576,229.3C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
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
