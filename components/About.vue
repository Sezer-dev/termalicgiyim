<template>
  <main
    id="about"
    class="container bg-white p-md-5 p-4 about d-flex justify-content-center"
  >
    <div class="row">
      <div class="col-12 d-flex justify-content-md-end justify-content-center">
        <div class="d-flex flex-column align-self-end">
          <h5 class="about-heading text-grey">
            HAKKIMIZDA
          </h5>
          <span class="line" />
        </div>
      </div>
      <div class="col-md-3 col-12 order-md-1 order-2 d-flex h-100">
        <img
          src="~/assets/yunuzundon.png"
          alt="About Image"
          class="about-img"
        />
      </div>
      <div
        class="col-md-9 col-12 order-md-2 order-1 h-100 d-flex flex-column justify-content-center"
      >
        <p class="d-flex align-self-end w-md-100 w-75 about-p text-grey">
          1924 yılında Hüseyin Küçükaslan tarafından kurulan Termal İç Giyim
          kısa zamanda iç giyimde Türkiye’nin en önde gelen markası haline
          gelmiştir. İnovasyonu kendine vizyon edinmiş çalışanları ve
          yöneticileri ile yün, termal ve pamuk içlikler, pijama ve boxer
          çeşitleri, interlok pamuk-yün kumaş üretmektedir. Müşteri
          memnuniyetinden ve kaliteden ödün vermeden çalışmak şirketin hizmet
          anlayışının temelini oluşturur.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-img {
  position: absolute;
  top: -150px;
  height: 130%;
}
.about {
  background-image: url("https://termalicgiyim.com/_nuxt/img/about-bg.019ed2d.svg");
  background-repeat: no-repeat;
  background-origin: content-box;
  min-height: 425px;
  margin-top: 175px !important;
}

.about-p {
  font-weight: 600;
  font-size: 24px;
}

.about-heading {
  font-size: 30px;
  letter-spacing: 5px;
  font-weight: 600;
}
.line {
  border-bottom: 4px solid #a5f2f3;
  height: 1px;
  width: 100%;
  display: block;
}
</style>
