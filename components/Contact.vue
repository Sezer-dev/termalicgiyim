<template>
  <main id="contact" class="container bg-white mt-5 p-md-5 p-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-md-end justify-content-center">
        <div>
          <h5 class="contact-header text-gray">İLETİŞİM</h5>
          <span class="line"></span>
        </div>
      </div>
      <div class="col-md-6 col-12 mb-xl-5 pt-4">
        <div class="h-100">
          <img
            class="img-fluid"
            src="https://termalicgiyim.com/_nuxt/img/contact-img.73ce251.svg"
            alt="contact image"
          />
          <h6 class="font-weight-bold my-4">
            Toptan termal giyim alım talepleriniz için iletişime geçebilirsiniz.
          </h6>
        </div>
      </div>
      <div class="col-md-6 col-12 pl-md-5 pt-xl-5">
        <div class="mt-xl-5 mt-md-4">
          <h5>Adres</h5>
          <p class="mb-0">Seyrantepe Mahallesi Yıldız Sokak No: 5</p>
          <p class="mt-0">Kağıthane / İstanbul</p>
        </div>
        <div class="mt-xl-5 mt-md-4">
          <address class="my-2">
            <b-icon-phone font-scale="1.2" />
            <a href="tel:+902125148080">+90 212 514 80 80</a>
          </address>
          <address class="my-2">
            <b-icon-phone font-scale="1.2" />
            <a href="tel:+905382976383">+90 538 297 63 73</a>
          </address>
          <address class="my-2">
            <b-icon-envelope font-scale="1.2" />
            <a href="mailto:bilgi@kucukaslantekstil.com"
              >bilgi@kucukaslantekstil.com</a
            >
          </address>
          <address class="my-2">
            <b-icon-envelope font-scale="1.2" />
            <a href="mailto:halisyun@gmail.com">halisyun@gmail.com</a>
          </address>
        </div>
        <div></div>
      </div>
    </div>
  </main>
</template>

<script>
import { BIconTelephoneFill, BIconEnvelopeFill } from "bootstrap-vue";

export default {
  name: "Contact",
  components: {
    "b-icon-phone": BIconTelephoneFill,
    "b-icon-envelope": BIconEnvelopeFill
  }
};
</script>

<style scoped>
#contact {
  background-image: url("https://termalicgiyim.com/_nuxt/img/about-bg.019ed2d.svg");
  background-repeat: no-repeat;
  background-origin: content-box;
  min-height: 425px;
}
.line {
  border-bottom: 4px solid #a5f2f3;
  height: 1px;
  width: 100%;
  display: block;
}
.contact-header {
  font-size: 30px;
  letter-spacing: 5px;
}
a {
  text-decoration: none;
  color: black;
  background-color: transparent;
}
</style>
