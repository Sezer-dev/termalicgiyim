<template>
  <div class="container">
    <div>
      <b-button
        v-b-toggle.faq-1
        block
        class="d-flex bg-white text-black justify-content-between faq-button"
        >Termal Giyimin Avantajları Nelerdir?
        <b-icon icon="plus-circle"></b-icon>
      </b-button>
      <b-collapse id="faq-1">
        <div class="bg-white d-flex flex-column">
          <p class="align-self-start">
            Termal iç çamaşırı, rüzgâr, sis, karla karışık yağmur veya karlı
            sert havalarda vücudu sıcak tutmak için alt ve üst olarak giyilen
            iki parçalı giysidir. Bu kıyafet normalde ayaklara kadar uzun ve
            bileklere kadar uzun kolludur ve direkt cilde temas edilerek
            giyilir. Vücuda sıcaklık sağlamak için vücut ısısını hapseder.
            Termal giysinin iki parçası birbirinden bağımsız olduğundan,
            ihtiyaca göre üst veya alt kısmı giymeyi seçebilirsiniz.
          </p>
          <span> </span>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { BButton, BIconPlusCircle, BCollapse, VBToggle } from "bootstrap-vue";
export default {
  name: "FAQ",
  components: {
    "b-button": BButton,
    "b-icon": BIconPlusCircle,
    "b-collapse": BCollapse
  },
  directives: {
    "b-toggle": VBToggle
  }
};
</script>

<style scoped>
.btn-secondary {
  color: #343a40;
}
</style>
