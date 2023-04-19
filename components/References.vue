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
          <article class="overflow-hidden rounded-lg shadow-lg">
            <img
              class="w-full h-72 object-cover"
              :src="reference.imgUrl"
              loading="lazy"
              alt="{&quot;&quot;}"
            >

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                {{ reference.name }}
              </h1>
            </header>

            <!-- <a href="#">
              <img alt="Placeholder" class="block h-auto w-full" :src="reference.imgUrl">
            </a> -->
            <!--
 -->

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
import vega2 from '~/assets/reference/vega/2.jpg'
import mb1 from '~/assets/reference/mb/1.jpg'
import zss1 from '~/assets/reference/sumice/1.jpg'
export default Vue.extend({
  name: 'References',
  data () {
    return {
      references: [
        {
          imgUrl: vega2,
          name: 'Hotel Vega'
        },
        {
          imgUrl: mb1,
          name: 'Kulturní dům Malá Bystřice'
        },
        {
          imgUrl: zss1,
          name: 'ZŠ Šumice'
        }

      ]
    }
  }
})

</script>
<style scoped>
.img-second {
    object-fit: cover;
    width: 35%;
    height: 55%;
    position: absolute;
    bottom: 4rem;
    right: 20%;
}
</style>
