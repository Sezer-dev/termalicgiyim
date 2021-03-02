<template>
  <main class="container my-5">
    <client-only>
      <carousel-3d :style="{ height: '370px' }" :autoplay="true">
        <slide
          v-for="(slide, i) in slides"
          :key="i"
          :style="{
            width: '300px',
            height: '370px',
            border: 'none'
          }"
          :index="i"
          class="bg-white shadow-sm"
        >
          <div
            :style="{
              backgroundImage: `url('${slide.url}')`,
              width: '100%',
              height: '370px',
              backgroundSize: 'auto 330px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 0'
            }"
            class="d-flex align-items-end justify-content-center"
          >
            <div
              :style="{ height: '40px' }"
              class="d-flex justify-content-center w-100 align-items-center"
            >
              <p
                class="text-nowrap m-0 h-100 w-100 d-flex align-items-center justify-content-center"
              >
                {{ slide.name }}
              </p>
            </div>
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
          name: "Termal Uzun Kol T-Shirt",
          url: "https://termalicgiyim.com/img/womenlongsleeve.jpg"
        },
        {
          id: 1,
          name: "Termal Bere",
          url: "https://termalicgiyim.com/img/bere.jpg"
        },
        {
          id: 2,
          name: "Termal Kısa Kol T-Shirt",
          url: "https://termalicgiyim.com/img/yunkisakol.jpg"
        },
        {
          id: 3,
          name: "Termal Kar Maskesi",
          url: "https://termalicgiyim.com/img/karmaskesi.jpg"
        },
        {
          id: 4,
          name: "Termal Uzun Kol T-Shirt",
          url: "https://termalicgiyim.com/img/DSC_8694.jpg"
        },
        {
          id: 5,
          name: "Termal Boyunluk",
          url: "https://termalicgiyim.com/img/boyunluk.jpg"
        },
        {
          id: 6,
          name: "Termal Sıfır Kol T-Shirt",
          url: "https://termalicgiyim.com/img/DSC_8683.jpg"
        }
      ]
    };
  }
};
</script>

<style></style>
