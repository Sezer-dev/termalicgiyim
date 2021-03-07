<template>
  <main class="container my-5">
    <client-only>
      <carousel-3d
        :width="300"
        :height="370"
        :autoplay="true"
        :autoplay-hover-pause="true"
        :border="0"
        :perspective="20"
      >
        <slide
          v-for="(slide, i) in slides"
          :key="i"
          :index="i"
          class="bg-white shadow-sm faq-slide-container carousel"
        >
          <div class="d-flex w-100 flex-column">
            <div
              :style="{ backgroundImage: `url('${slide.url}')` }"
              class="faq-slide-bg d-flex justify-content-center w-100 align-items-center"
            ></div>
            <p
              class="faq-slide-text text-nowrap m-0 w-100 d-flex justify-content-center align-items-center"
            >
              {{ slide.name }}
            </p>
          </div>
        </slide>
      </carousel-3d>
    </client-only>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          id: 0,
          name: this.$t("products.shirt"),
          url: "https://termalicgiyim.com/img/womenlongsleeve.jpg"
        },
        {
          id: 1,
          name: this.$t("products.beret"),
          url: "https://termalicgiyim.com/img/bere.jpg"
        },
        {
          id: 2,
          name: this.$t("products.t-shirt"),
          url: "https://termalicgiyim.com/img/yunkisakol.jpg"
        },
        {
          id: 3,
          name: this.$t("products.mask"),
          url: "https://termalicgiyim.com/img/karmaskesi.jpg"
        },
        {
          id: 4,
          name: this.$t("products.shirt"),
          url: "https://termalicgiyim.com/img/DSC_8694.jpg"
        },
        {
          id: 5,
          name: this.$t("products.collar"),
          url: "https://termalicgiyim.com/img/boyunluk.jpg"
        },
        {
          id: 6,
          name: this.$t("products.athlet"),
          url: "https://termalicgiyim.com/img/DSC_8683.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel {
  width: 250px;
  height: 370px;
}
.faq-slide-bg {
  width: 100%;
  height: 330px;
  background-size: auto 330px;
  background-repeat: no-repeat;
  background-position: 50% 0;
}
.faq-slide-text {
  height: 40px;
}
</style>
