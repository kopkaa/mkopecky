<template>
  <div class="bg-purple-800 min-h-screen">
    <div class="bg-white flex flex-col font-sans">
      <div class="container mx-auto px-8">
        <Navigation />
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
</template>
