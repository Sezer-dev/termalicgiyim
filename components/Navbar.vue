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
          class="d-flex flex-md-row flex-column text-md-left text-center justify-content-center align-self-center"
        >
          <li v-for="link in links" :key="link.id">
            <NuxtLink
              v-if="link.external"
              :to="{ path: link.path }"
              class="pl-3 pt-md-0 pt-1 font-weight-bold"
            >
              {{ link.name }}
            </NuxtLink>
            <a
              v-else
              :href="link.path"
              class="pl-3 pt-md-0 pt-1 font-weight-bold"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </b-collapse>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 0,
          name: "Ana Sayfa",
          path: "/",
          external: "false"
        },
        {
          id: 1,
          name: "Hakkımızda",
          path: "#about",
          external: "false"
        },
        {
          id: 2,
          name: "Online Satış",
          path: "https://icgiyim.com/",
          external: "true"
        },
        {
          id: 3,
          name: "İletişim",
          path: "#contact",
          external: "false"
        },
        {
          id: 4,
          name: "English",
          path: "https://thermaluwear.com/",
          external: "true"
        }
      ]
    };
  }
};
</script>

<style></style>
