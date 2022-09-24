<template>
  <nav
    id="mainNav"
    class="py-6 bg-white sticky top-0 transition-all"
    :class="{ 'scrolled': !view.atTopOfPage }"
  >
    <div class="px-8 flex flex-row items-center justify-between mx-auto">
      <h3 class="sm:text-2xl font-bold uppercase text-blue-900">
        TZB PROJEKT KOPECKÝ s.r.o
      </h3>
      <div class="hidden md:flex text-lg">
        <a
          href="#top"
          class="text-gray-800 hover:text-blue-600 py-3 px-6"
          title="Domů"
        >
          Domů
        </a>
        <a
          href="#services"
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
          Reference
        </a>
        <a
          href="#contact"
          class="text-gray-800 hover:text-blue-600 py-3 px-6"
          title="Kontakt"
        >
          Kontakt
        </a>
      </div>

      <!-- HAMBURGER MENU -->
      <div id="hamburgerMenu" class="tham tham-e-squeeze tham-w-6 md:hidden" @click="toggleMenu">
        <div class="tham-box">
          <div class="tham-inner" />
        </div>
      </div>
    </div>
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
  mounted () {
    const navHeight = document.getElementById('mainNav')?.offsetHeight
    document.documentElement.style.setProperty('--scroll-padding', navHeight + 'px')
  },
  methods: {
    handleScroll () {
      const nav = document.getElementById('mainNav')
      if (window.pageYOffset > 0) {
        // user  scrolled
        nav?.classList.remove('py-6')
        nav?.classList.add('py-1')
        if (this.view.atTopOfPage) { this.view.atTopOfPage = false }
      } else if (!this.view.atTopOfPage) { this.view.atTopOfPage = true }
    },

    toggleMenu () {
      const hamburgerMenu = document.getElementById('hamburgerMenu')
      hamburgerMenu?.classList.toggle('tham-active')
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
