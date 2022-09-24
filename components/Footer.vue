<template>
  <footer
    class="pt-40 bg-blue-100 text-white shadow  dark:bg-gray-800"
  >
    <div id="contact" class="md:flex md:items-start md:justify-between px-64">
      <div class="basis-1/3 text-left">
        <h2 class="font-bold text-4xl tracking-wide mb-8">
          Ozvěte se nám!
        </h2>
        <h3>
          <a
            href="mailto:projekce@tzb-projekt-kopecky.cz"
            class="hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon inline mr-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>

            <span class="tracking-wide text-lg">
              projekce@tzb-projekt-kopecky.cz
            </span>
          </a>
        </h3>
        <h3 class="mt-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
            />
          </svg>
          <span class="tracking-wide text-lg">+420 603 544 735</span>
        </h3>
      </div>
      <div class="basis-1/3" />
      <div class="basis-1/3">
        <h2 class="font-bold text-4xl tracking-wide mb-8">
          Kde nás najdete
        </h2>
        <p class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="11" r="3" />
            <path
              d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
            />
          </svg>
          <span class="tracking-wide text-lg">Smetanova 1484, 755 01 Vsetín</span>
        </p>
        <div class="mapouter mt-4">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              width="340"
              height="177"
              src="https://maps.google.com/maps?q=Smetanova%201484,%20755%2001%20Vset%C3%ADn&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            /><a href="https://fmovies-online.net">fmovies</a><br><style>
              .mapouter {
              position: relative;
              text-align: right;
              height: 177px;
              width: 340px;
              }
            </style><a href="https://www.embedgooglemap.net">google embed</a><style>
              .gmap_canvas {
              overflow: hidden;
              background: none !important;
              height: 177px;
              width: 340px;
              }
            </style>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-gray-200 sm:mx-auto dark:border-gray-700 mt-14">
    <div class="py-4 px-32 flex justify-between">
      <p>
        © {{ currentYear }} TZB PROJEKT KOPECKÝ s.r.o
      </p>
      <p>IČO: 11111</p>
    </div>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation',
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
})
</script>
