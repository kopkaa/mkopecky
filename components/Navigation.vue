<template>
  <nav
    id="mainNav"
    class="py-6 bg-white sticky top-0 transition-all"
    :class="{ 'scrolled': !view.atTopOfPage }"
  >
    <div class="px-8 flex flex-col sm:flex-row items-center justify-between mx-auto">
      <h3 class="text-2xl font-bold uppercase text-blue-900">
        TZB - Martin KOPECKÝ
      </h3>
      <div class="hidden md:flex text-lg">
        <a
          href="#"
          class="text-gray-800 hover:text-blue-600 py-3 px-6"
          title="Domů"
        >
          Domů
        </a>
        <a
          href="#"
          class="text-gray-800 hover:text-blue-600 py-3 px-6"
          title="Služby"
        >
          Služby
        </a>
        <a
          href="#aboutUs"
          class="text-gray-800 hover:text-blue-600 py-3 px-6"
          title="O nás"
        >
          O nás
        </a>
        <a
          href="#"
          class="text-gray-800 hover:text-blue-600 py-3 px-6"
          title="Kontakt"
        >
          Kontakt
        </a>
        <a
          href="#"
          class="text-gray-800 hover:text-blue-600 py-3 px-6"
          title="FAQ"
        >
          FAQ
        </a>
      </div>
    </div>
    <!-- <button
      class="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5"
    >
      <span class="w-5 h-px mb-1 bg-orange-500" />
      <span class="w-5 h-px mb-1 bg-orange-500" />
      <span class="w-5 h-px mb-1 bg-orange-500" />
    </button> -->
  </nav>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
  data () {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const nav = document.getElementById('mainNav')
      if (window.pageYOffset > 0) {
        // user  scrolled
        nav?.classList.remove('py-6')
        if (this.view.atTopOfPage) { this.view.atTopOfPage = false }
      } else if (!this.view.atTopOfPage) { this.view.atTopOfPage = true }
    }
  }
})
</script>

<style>

nav {
    z-index: 10
}

nav.scrolled {
    @apply shadow-2xl;
    border-bottom: 0px;
}

</style>
