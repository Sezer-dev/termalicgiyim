<template>
  <div class="container-fluid bg-white navbar-light">
    <nav class="container navbar navbar-expand-sm justify-content-between">
      <Logo />
      <button
        v-b-toggle.navbarSupportedContent
        type="button"
        class="navbar-toggler"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <b-collapse
        id="navbarSupportedContent"
        class="navbar-collapse collapse flex-grow-0"
      >
        <ul
          class="d-flex flex-md-row flex-column text-md-left text-center justify-content-center m-0"
        >
          <li v-for="(link, index) in links" :key="index">
            <a
              v-if="link.external"
              :href="link.path"
              class="pl-3 pt-md-0 pt-1 font-weight-bold"
            >
              {{ link.name }}
            </a>
            <NuxtLink
              v-else
              :to="{ path: link.path }"
              class="pl-3 pt-md-0 pt-1 font-weight-bold"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </b-collapse>
    </nav>
  </div>
</template>

<script>
import { VBToggle, BCollapse } from "bootstrap-vue";
export default {
  name: "NavigationBar",
  components: {
    "b-collapse": BCollapse
  },
  directives: {
    "b-toggle": VBToggle
  },
  data() {
    return {
      links: [
        {
          name: this.$t("navigations.home"),
          path: "/",
          external: false
        },
        {
          name: this.$t("navigations.aboutus"),
          path: "#about",
          external: false
        },
        {
          name: this.$t("navigations.onlineShopping"),
          path: "https://icgiyim.com/",
          external: true
        },
        {
          name: this.$t("navigations.contact"),
          path: "#contact",
          external: false
        },
        {
          name: this.$i18n.locale === "tr" ? "English" : "Türkçe",
          path:
            this.$i18n.locale === "tr"
              ? this.localePath("/", "en")
              : this.localePath("/", "tr"),
          external: false
        }
      ]
    };
  }
};
</script>

<style scoped>
a.nuxt-link-exact-active,
a {
  text-decoration: none !important;
  color: #3a3a3a !important;
}
ul {
  list-style: none;
}
</style>
