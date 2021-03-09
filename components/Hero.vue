<template>
  <main
    id="home"
    class="container bg-white mt-5 p-md-5 p-4 d-flex justify-content-center hero"
  >
    <div class="row">
      <div class="col-md-9 d-flex flex-column align-self-center">
        <div class="w-50 mb-5">
          <h4 class="font-weight-bold">
            {{ this.$t("hero.text1") }}
          </h4>
        </div>
        <div class="d-flex align-self-end w-50">
          <h4 class="font-weight-bold">
            {{ this.$t("hero.text2") }}
          </h4>
        </div>
      </div>
      <div class="col-md-3 col-sm-12 h-100">
        <img src="~/assets/herowoman.png" alt="Hero Image" class="hero-image" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.hero {
  background-image: url("https://termalicgiyim.com/_nuxt/img/hero-bg.e8b7ae7.svg") !important;
  background-repeat: no-repeat;
  background-origin: content-box;
  min-height: 540px;
}
.hero-image {
  position: absolute;
  height: 130%;
}

@media only screen and (max-width: 768px) {
  .hero-image {
    height: 300px;
    top: -150px;
  }
  .hero {
    min-height: 360px;
  }
}
</style>
