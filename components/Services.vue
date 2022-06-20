<template>
  <section id="aboutUs" class="min-h-screen  pt-4">
    <h1 class="uppercase text-4xl font-semibold text-center">
      Naše služby
    </h1>
    <div class="flex flex-row mt-32">
      <div class="flex-1 pr-16 relative">
        <!-- TODO: Serve images in webp -->
        <img src="~assets/third-img.jpg" class="grayscale-[30%]">
        <img src="~assets/second-img.jpg" class="img-second">
      </div>
      <div class="flex-1 pr-8 pl-8">
        <h2 class="font-semibold text-2xl">
          Postaráme se o váš projekt a realizaci technologií TZB pro všechny druhy budov.
        </h2>
        <div class="flex flex-row mt-12 flex-wrap">
          <div class="font-semibold text-xl basis-1/2">
            <img src="~assets/chlazeni_icon.png" width="35px" class="mb-3" alt="Chlazení ikona">
            <h3>Chlazení</h3>
            <p class="font-normal text-base mt-2 pr-5">
              Navrhujeme všechny způsoby vytápění od nízkoteplotních otopných soustav s podlahovým vytápěním, přes klasické otopné soustavy s otopnými tělesy, až po elektrické vytápění pomocí elektrických přímotopů.
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2">
            <img src="~assets/vytapeni_icon.png" width="35px" class="mb-3" alt="Vytápění ikona">
            <h3>Vytápění</h3>
            <p class="font-normal text-base mt-2">
              Navrhujeme všechny způsoby vytápění od nízkoteplotních otopných soustav s podlahovým vytápěním, přes klasické otopné soustavy s otopnými tělesy, až po elektrické vytápění pomocí elektrických přímotopů a topných fólií.
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2 mt-8">
            <img src="~assets/air_condition.png" width="35px" class="mb-3" alt="Klimatizace ikona">
            <h3>Klimatizace</h3>
            <p class="font-normal text-base mt-2 pr-5">
              Navrhujeme všechny způsoby vytápění od nízkoteplotních otopných soustav s podlahovým vytápěním, přes klasické otopné soustavy s otopnými tělesy, až po elektrické vytápění pomocí elektrických přímotopů a topných fólií.
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2 mt-8">
            <img src="~assets/cov_icon.png" width="35px" class="mb-3" alt="ČOV ikona">
            <h3>Inženýrské sítě a ČOV</h3>
            <p class="font-normal text-base mt-2">
              Navrhujeme všechny způsoby vytápění od nízkoteplotních otopných soustav s podlahovým vytápěním, přes klasické otopné soustavy s otopnými tělesy, až po elektrické vytápění pomocí elektrických přímotopů a topných fólií.
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
    width: 30%;
    height: 75%;
    position: absolute;
    bottom: 0rem;
    right: 20%;
}
</style>
