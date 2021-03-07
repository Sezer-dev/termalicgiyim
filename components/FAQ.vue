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
          faqQuestion: this.$t("faq.benefits"),
          faqAnswer: [...this.$t("faq.benAnswer")],
          icon: true,
          id: "faq-icon-1"
        },
        {
          faqQuestion: this.$t("faq.fabrics"),
          faqAnswer: [...this.$t("faq.fabAnswer")],
          icon: true,
          id: "faq-icon-2"
        },
        {
          faqQuestion: this.$t("faq.features"),
          faqAnswer: [...this.$t("faq.featAnswer")],
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
