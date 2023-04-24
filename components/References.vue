<template>
  <section class="pt-4 pb-16 pl-24 pr-24">
    <h1 id="references" class="uppercase text-4xl font-semibold text-center mb-12">
      Reference
    </h1>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <div v-for="(reference, index) in references" :key="index" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <!-- Article -->
          <article class="overflow-hidden rounded-lg shadow-lg pb-2">
            <div class="slide relative">
              <img
                class="w-full h-72 object-cover"
                :src="reference.imgUrl[reference.selectedImgIndex]"
                loading="lazy"
                alt="{&quot;&quot;}"
              >
              <!-- The previous button -->
              <a
                class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                @click="moveBack(index)"
              >
                ❮
              </a>

              <!-- The next button -->
              <a
                class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
                @click="moveNext(index)"
              >
                ❯
              </a>
            </div>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg font-semibold">
                {{ reference.name }}
              </h1>
            </header>

            <footer class="flex items-center justify-between leading-none p-2 md:p-2">
              <p class="ml-2 text-sm">
                Kompletní rekonstrukce TZB pro suterény, kuchyni a restaurace, lobby.
              </p>
            </footer>
          </article>
          <!-- END Article -->
        </div>
        <!-- END Column -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const mb1 = require('@/assets/reference/mb/1.jpg');
const mb2 = require('@/assets/reference/mb/2.jpg');
const mb3 = require('@/assets/reference/mb/3.jpg');

const vega2 = require('@/assets/reference/vega/4.jpg');
const vega3 = require('@/assets/reference/vega/5.jpg');
const vega4 = require('@/assets/reference/vega/3.jpg');
const vega5 = require('@/assets/reference/vega/6.jpg');

const zss1 = require('@/assets/reference/sumice/1.jpg');
const zss2 = require('@/assets/reference/sumice/2.jpg');
const zss3 = require('@/assets/reference/sumice/3.jpg');
const zss4 = require('@/assets/reference/sumice/4.jpg');
const zss5 = require('@/assets/reference/sumice/5.jpg');

const oc1 = require('@/assets/reference/oc-letna/1.jpg');
const oc2 = require('@/assets/reference/oc-letna/2.jpg');
const oc3 = require('@/assets/reference/oc-letna/3.jpg');
const oc4 = require('@/assets/reference/oc-letna/4.jpg');

const k1 = require('@/assets/reference/areal-karolinka/1.jpg');
const k2 = require('@/assets/reference/areal-karolinka/5.jpg');
const k3 = require('@/assets/reference/areal-karolinka/6.jpg');
const k4 = require('@/assets/reference/areal-karolinka/8.jpg');

const s1 = require('@/assets/reference/senegal/1.jpg');
const s2 = require('@/assets/reference/senegal/2.jpg');
const s3 = require('@/assets/reference/senegal/6.jpg');
const s4 = require('@/assets/reference/senegal/7.jpg');
const s5 = require('@/assets/reference/senegal/8.jpg');


interface IReference{
  imgUrl: any[],
  name: string,
  selectedImgIndex: number
}

export default Vue.extend({
  name: 'References',
  data () {
    return {
      references: [
        {
          imgUrl: [vega2, vega3, vega4, vega5],
          name: 'Hotel VEGA - rekonstrukce wellnes',
          selectedImgIndex: 0
        },
        {
          imgUrl: [mb1, mb2, mb3],
          name: 'Kulturní dům Malá Bystřice',
          selectedImgIndex: 0
        },
        {
          imgUrl: [zss1, zss2, zss3, zss4, zss5],
          name: 'Základní škola Šumice',
          selectedImgIndex: 0
        },
        {
          imgUrl: [oc1, oc2, oc3, oc4],
          name: 'Nájmení jednotka OC Letná',
          selectedImgIndex: 0
        },
        {
          imgUrl: [k1, k2, k3, k4],
          name: 'Průmyslový areál Karolinka',
          selectedImgIndex: 0
        },
        {
          imgUrl: [s1, s2, s3, s4, s5],
          name: 'Senegal - terminál letiště St. Louis',
          selectedImgIndex: 0
        },

      ]
    }
  },
  methods: {
    moveNext (referenceIndex: number) {
      let currentIndex = this.references[referenceIndex].selectedImgIndex
      if(!this.references[referenceIndex].imgUrl[++currentIndex]) {
        this.references[referenceIndex].selectedImgIndex = 0
      } else {
        this.references[referenceIndex].selectedImgIndex += 1
      }
    },
    moveBack (referenceIndex: number) {
      let currentIndex = this.references[referenceIndex].selectedImgIndex
      if(!this.references[referenceIndex].imgUrl[--currentIndex]) {
        this.references[referenceIndex].selectedImgIndex = this.references[referenceIndex].imgUrl.length - 1
      } else {
        this.references[referenceIndex].selectedImgIndex -= 1
      }
    },
    closeModal() {

    }
  }
})

</script>
