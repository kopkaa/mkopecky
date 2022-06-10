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
        <div class="flex flex-row mt-8 flex-wrap">
          <div class="font-semibold text-xl basis-1/2">
            <img src="https://www.tzb-design.cz/wp-content/uploads/2022/04/shutterstock_431767663-kopie-3.png" width="35px" class="mb-3">
            <h3>Chlazení</h3>
            <p class="font-normal text-base mt-2">
              To prevent hot air from taking over choose us for your AC installations
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2">
            <img src="https://www.tzb-design.cz/wp-content/uploads/2022/04/shutterstock_431767663-kopie-3.png" width="35px" class="mb-3">
            <h3>Vytápění</h3>
            <p class="font-normal text-base mt-2">
              To prevent hot air from taking over choose us for your AC installations
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2 mt-8">
            <img src="https://www.tzb-design.cz/wp-content/uploads/2022/04/shutterstock_431767663-kopie-3.png" width="35px" class="mb-3">
            <h3>Klimatizace</h3>
            <p class="font-normal text-base mt-2">
              To prevent hot air from taking over choose us for your AC installations
            </p>
          </div>
          <div class="font-semibold text-xl basis-1/2 mt-8">
            <img src="https://www.tzb-design.cz/wp-content/uploads/2022/04/shutterstock_431767663-kopie-3.png" width="35px" class="mb-3">
            <h3>Inženýrské sítě a ČOV</h3>
            <p class="font-normal text-base mt-2">
              To prevent hot air from taking over choose us for your AC installations
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
    bottom: -8rem;
    right: 20%;
}
</style>
