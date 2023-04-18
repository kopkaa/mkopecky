<template>
  <section class="min-h-screen pt-4 pb-16 bg-blue-100">
    <h1 id="services" class="uppercase text-4xl font-semibold text-center text-white">
      Naše služby
    </h1>
    <div class="flex-col-reverse flex mt-16 sm:flex-row sm:mt-32">
      <div class="flex-1 pr-16 relative">
        <!-- TODO: Serve images in webp -->
        <img src="~assets/third-img.jpg" class="grayscale-[30%]">
        <img src="~assets/second-img.jpg" class="img-second">
      </div>
      <div class="flex-1 pr-8 pl-8">
        <h2 class="font-semibold text-2xl text-center sm:text-left text-white">
          Postaráme se o váš projekt a realizaci technologií TZB pro všechny druhy budov.
        </h2>
        <div class="flex flex-col sm:flex-row mt-12 flex-wrap">
          <div class="font-semibold text-xl basis-1/2 mb-16 sm:mb-6">
            <img src="~assets/chlazeni_icon-removebg-preview.png" width="35px" class="mb-3 float-left sm:float-none mr-3 brightness-[3]" alt="Chlazení ikona">
            <h3 class="text-white">
              Chlazení
            </h3>
            <p class="font-normal text-lg mt-6 pr-5">
              Projektujeme různé systémy chlazení od běžných chladivových systémů.
              Zdrojem chladu mohou být venkovní chladící jednotky, tepelná čerpadla, chladící stroje a další zařízení. U tepelných čerpadel země-voda můžeme navrhnout pasivní chlazení.
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2 mb-16 sm:mb-6">
            <img src="~assets/vytapeni_icon-removebg-preview.png" width="35px" class="mb-3 float-left sm:float-none mr-3 brightness-[3]" alt="Vytápění ikona">
            <h3 class="text-white">
              Vytápění
            </h3>
            <p class="font-normal text-lg mt-6">
              Navrhujeme všechny způsoby vytápění od nízkoteplotních otopných soustav s podlahovým vytápěním, přes klasické otopné soustavy s otopnými tělesy, až po elektrické vytápění pomocí elektrických přímotopů a topných fólií.
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2 mb-16 sm:mb-6 sm:mt-8">
            <img src="~assets/air_condition-removebg-preview.png" width="35px" class="mb-3 float-left sm:float-none mr-3 brightness-[3]" alt="Klimatizace ikona">
            <h3 class="text-white">
              Klimatizace
            </h3>
            <p class="font-normal text-lg mt-6 pr-5">
              Můžeme nabídnout návrh vzduchotechniky pro rodinné domy, bytové domy, obchodní centra nebo administrativní objekty.
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2 mb-16 sm:mb-6 sm:mt-8">
            <img src="~assets/cov_icon-removebg-preview.png" width="35px" class="mb-3 float-left sm:float-none mr-3 brightness-[3]" alt="ČOV ikona">
            <h3 class="text-white">
              Inženýrské sítě a ČOV
            </h3>
            <p class="font-normal text-lg mt-6">
              Dokážeme udělat návrh vodovodu a kanalizace, řešení likvidace dešťových a splaškových vod. Umíme navrhnout likvidaci dešťových vod vsakem, nebo řízeným odtokem. Pokud je to zapotřebí, tak navrhujeme i čističky odpadních vod k rodinným domům.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
