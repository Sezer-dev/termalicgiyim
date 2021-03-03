<template>
  <div class="container bg-white p-md-5 p-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-md-end justify-content-center">
        <div class="d-flex flex-column align-self-end">
          <h2 class="sss-header">SSS</h2>
          <span class="line"></span>
        </div>
      </div>
      <AccordionItem />
      <div class="col-12">
        <div>
          <b-button
            v-b-toggle.faq-1
            block
            class="d-flex bg-white text-black justify-content-between faq-button py-4 mt-3"
            squared
            accordion="faq-accordion"
            @click="accordionOne"
            >Termal Giyimin Avantajları Nelerdir?
            <b-icon-plus v-if="faqIcons.faqIconOne"></b-icon-plus>
            <b-icon-dash v-else></b-icon-dash>
          </b-button>
          <b-collapse id="faq-1">
            <div class="bg-white d-flex flex-column">
              <p class="align-self-start">
                Termal iç çamaşırı, rüzgâr, sis, karla karışık yağmur veya karlı
                sert havalarda vücudu sıcak tutmak için alt ve üst olarak
                giyilen iki parçalı giysidir. Bu kıyafet normalde ayaklara kadar
                uzun ve bileklere kadar uzun kolludur ve direkt cilde temas
                edilerek giyilir. Vücuda sıcaklık sağlamak için vücut ısısını
                hapseder. Termal giysinin iki parçası birbirinden bağımsız
                olduğundan, ihtiyaca göre üst veya alt kısmı giymeyi
                seçebilirsiniz.
              </p>
              <span> </span>
            </div>
          </b-collapse>
        </div>
      </div>
      <div class="col-12">
        <div>
          <b-button
            v-b-toggle.faq-2
            block
            squared
            class="d-flex bg-white text-black justify-content-between faq-button py-4"
            accordion="faq-accordion"
            @click="accordionTwo"
            >Termal Giyimin Avantajları Nelerdir?
            <b-icon-plus v-if="faqIcons.faqIconTwo"></b-icon-plus>
            <b-icon-dash v-else></b-icon-dash>
          </b-button>
          <b-collapse id="faq-2">
            <div class="bg-white d-flex flex-column">
              <p class="align-self-start">
                Termal iç çamaşırı, rüzgâr, sis, karla karışık yağmur veya karlı
                sert havalarda vücudu sıcak tutmak için alt ve üst olarak
                giyilen iki parçalı giysidir. Bu kıyafet normalde ayaklara kadar
                uzun ve bileklere kadar uzun kolludur ve direkt cilde temas
                edilerek giyilir. Vücuda sıcaklık sağlamak için vücut ısısını
                hapseder. Termal giysinin iki parçası birbirinden bağımsız
                olduğundan, ihtiyaca göre üst veya alt kısmı giymeyi
                seçebilirsiniz.
              </p>
              <span> </span>
            </div>
          </b-collapse>
        </div>
      </div>
      <div class="col-12">
        <div>
          <b-button
            v-b-toggle.faq-3
            block
            class="d-flex bg-white text-black justify-content-between faq-button py-4"
            squared
            accordion="faq-accordion"
            @click="accordionThree"
            >Termal Giyimin Avantajları Nelerdir?
            <b-icon-plus v-if="faqIcons.faqIconThree"></b-icon-plus>
            <b-icon-dash v-else></b-icon-dash>
          </b-button>
          <b-collapse id="faq-3">
            <div class="bg-white d-flex flex-column">
              <p class="align-self-start">
                Termal iç çamaşırı, rüzgâr, sis, karla karışık yağmur veya karlı
                sert havalarda vücudu sıcak tutmak için alt ve üst olarak
                giyilen iki parçalı giysidir. Bu kıyafet normalde ayaklara kadar
                uzun ve bileklere kadar uzun kolludur ve direkt cilde temas
                edilerek giyilir. Vücuda sıcaklık sağlamak için vücut ısısını
                hapseder. Termal giysinin iki parçası birbirinden bağımsız
                olduğundan, ihtiyaca göre üst veya alt kısmı giymeyi
                seçebilirsiniz.
              </p>
              <span> </span>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BButton,
  BIconPlusCircle,
  BIconDashCircle,
  BCollapse,
  VBToggle
} from "bootstrap-vue";
export default {
  name: "FAQ",
  components: {
    "b-button": BButton,
    "b-icon-plus": BIconPlusCircle,
    "b-collapse": BCollapse,
    "b-icon-dash": BIconDashCircle
  },
  directives: {
    "b-toggle": VBToggle
  },
  data() {
    return {
      faqIcons: {
        faqIconOne: true,
        faqIconTwo: true,
        faqIconThree: true
      }
    };
  },
  methods: {
    accordionOne() {
      this.faqIcons.faqIconOne = !this.faqIcons.faqIconOne;
    },
    accordionTwo() {
      this.faqIcons.faqIconTwo = !this.faqIcons.faqIconTwo;
    },
    accordionThree() {
      this.faqIcons.faqIconThree = !this.faqIcons.faqIconThree;
    }
  }
};
</script>

<style scoped>
.line {
  border-bottom: 4px solid #a5f2f3;
  height: 1px;
  width: 100%;
  display: block;
}
.sss-header {
  letter-spacing: 5px;
}

.faq-button {
  color: #3a3a3a;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.15rem;
}
.faq-button:focus {
  box-shadow: none;
  color: #03b5d2;
}
.faq-button:hover {
  color: #03b5d2;
}
.faq-button:active {
  box-shadow: none !important;
  color: #3a3a3a;
}
</style>
