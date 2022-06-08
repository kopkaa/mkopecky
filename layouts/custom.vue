<template>
  <div class="w-full h-full bg-blue-100 min-h-screen">
    <div class="bg-purple-800 min-h-screen">
      <div class="bg-white flex flex-col font-sans">
        <div class="container mx-auto px-8">
          <header
            class="flex flex-col sm:flex-row items-center justify-between py-6 relative"
          >
            <h3 class="text-2xl font-bold uppercase text-blue-900">
              TZB - Martin KOPECKÝ
            </h3>
            <nav class="hidden md:flex text-lg">
              <a
                href="#"
                class="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                Domů
              </a>
              <a
                href="#"
                class="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                Služby
              </a>
              <a
                href="#"
                class="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                O nás
              </a>
              <a
                href="#"
                class="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                Kontakt
              </a>
              <a
                href="#"
                class="text-gray-800 hover:text-purple-300 py-3 px-6"
              >
                FAQ
              </a>
            </nav>
            <button
              class="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5"
            >
              <span class="w-5 h-px mb-1 bg-orange-500" />
              <span class="w-5 h-px mb-1 bg-orange-500" />
              <span class="w-5 h-px mb-1 bg-orange-500" />
            </button>
          </header>
          <main
            class="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12 min-h-screen"
          >
            <div
              class="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left"
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
                class="bg-purple-300 hover:bg-purple-400 py-3 px-6 uppercase text-lg font-bold text-white rounded-full"
              >
                Learn more
              </a>
            </div>
            <div class="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-1/2 sm:pl-12" />
          </main>
        </div>
      </div>
    </div>
    <!-- <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-shrink-0  mr-6">
        <span class="font-semibold text-xl tracking-tight">TZB PROJEKT KOPECKÝ</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow" />
        <div>
          <a
            href="#responsive-header"
            class="block mt-4 mr-6 uppercase lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 mr-6 uppercase lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800"
          >
            Služby
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 mr-6 uppercase lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800"
          >
            Reference
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 mr-6 uppercase lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-800"
          >
            Kontakt
          </a>
        </div>
      </div>
    </nav> -->
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
