<template>
  <main class="container bg-white p-md-5 p-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-md-end justify-content-center">
        <div class="d-flex flex-column align-self-end mb-2">
          <h3 class="sss-header">SSS</h3>
          <span class="line"></span>
        </div>
      </div>
      <div v-for="(accordion, index) in accordions" :key="index" class="col-12">
        <div>
          <b-button
            v-b-toggle="accordion.id"
            block
            class="d-flex bg-white text-black justify-self-md-start justify-content-between  border-bottom faq-button py-4"
            :class="{ faqVisible: !accordion.icon }"
            squared
            @click="accordionHandler(index)"
          >
            {{ accordion.faqQuestion }}
            <b-icon-plus v-if="accordion.icon"></b-icon-plus>
            <b-icon-dash v-else></b-icon-dash>
          </b-button>
          <b-collapse :id="accordion.id">
            <div
              class="bg-white d-flex flex-column font-weight-light border-bottom faq-content"
            >
              <p
                v-for="(answer, aIndex) in accordion.faqAnswer"
                :key="aIndex"
                class="mt-4"
              >
                {{ answer }}
              </p>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
  </main>
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
      accordions: [
        {
          faqQuestion: "Termal iç giyimin faydaları nelerdir?",
          faqAnswer: [
            "Termal iç çamaşırı, rüzgâr, sis, karla karışık yağmur veya karlı sert havalarda vücudu sıcak tutmak için alt ve üst olarak giyilen iki parçalı giysidir. Bu kıyafet normalde ayaklara kadar uzun ve bileklere kadar uzun kolludur ve direkt cilde temas edilerek giyilir. Vücuda sıcaklık sağlamak için vücut ısısını hapseder. Termal giysinin iki parçası birbirinden bağımsız olduğundan, ihtiyaca göre üst veya alt kısmı giymeyi seçebilirsiniz.",
            "Termal iç çamaşırı normalde ayaklara kadar uzun ve bileklere kadar uzun kolludur, ancak kısa alt içlik ve kısa kollu bluzlar gibi elbiseler giymeyi seven kadınlara hitap etmez. Ancak şimdi halis termal, her türlü giysiye iyi uyan farklı stiller yaratıyor. Artık kısa alt içlik ve kolsuz termal iç çamaşırını seçme seçeneği var. Profesyonel kadınların uzun kollu ceket veya bluz giyemedikleri yerlerde rahatça sıcak kalmaları için harika bir yoldur. Erkekler de ayrıca tişört gibi gündelik kıyafetlerin altında kısa kollu veya kolsuz termal kıyafetler giyebilirler."
          ],
          icon: true,
          id: "faq-icon-1"
        },
        {
          faqQuestion:
            "Termal iç çamaşırı yapımında kullanılan çamaşırlar nelerdir?",
          faqAnswer: [
            "Termal iç çamaşırları üretmek için hem doğal hem de sentetik kumaşlar kullanılır. Yün ve pamuklu kumaşlar uzun zamandır kış mevsimi için kıyafet üretmek için kullanılmıştır, çünkü bu doğal malzemeler sıcaklığı tutmak için mükemmel güce sahiptir. Günümüzde polipropilen, polyester ve naylon gibi sentetikler de kullanılmaktadır. Ancak, termal giysilerin çoğu doğal ve sentetik kumaşların bir karışımından yapılır. %100 doğal olan yün ve pamuklu giysiler nemi emer ve terli ıslak giysi tende uzun süre kaldığında insanı tekrardan hasta olmasına neden olur. Bu sebeple bilimsel araştırma ve geliştirme çalışmalarının sonucunda ortaya çıkan termal kumaş karışımları nemi hapseder ve anında kurur. Giysi ıslak kalmaz ve insanları sıcak tutmaya devam eder."
          ],
          icon: true,
          id: "faq-icon-2"
        },
        {
          faqQuestion: "İdeal bir termal iç çamaşırının özellikleri nelerdir?",
          faqAnswer: [
            "Hafif olmalıdır. Rahat ve esnek yapıda olmalıdır. Aktif uyum sağlamalıdır, bir gömlek ve bir çift pantolonun altına kolayca sığması gerektiği anlamına gelir. Vücut sıcaklığını düzenlemeye yardımcı olmalıdır."
          ],
          icon: true,
          id: "faq-icon-3"
        }
      ]
    };
  },
  methods: {
    accordionHandler(index) {
      this.accordions[index].icon = !this.accordions[index].icon;
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
  font-size: 1.15rem;
}
.faq-button:focus {
  box-shadow: none;
}
.faq-button:hover,
.faqVisible {
  color: #03b5d2;
}
.faq-button:active {
  box-shadow: none !important;
  color: #03b5d2 !important;
}
.faq-content {
  font-size: 1rem;
  font-weight: 300;
}
</style>
