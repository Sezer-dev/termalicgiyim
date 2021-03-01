<template>
  <div class="container-fluid bg-white navbar-light">
    <nav class="container navbar navbar-expand-sm justify-content-between">
      <Logo />
      <button v-b-toggle.navbarSupportedContent type="button" class="navbar-toggler">
        <span class="navbar-toggler-icon" />
      </button>
      <b-collapse
        id="navbarSupportedContent"
        class="navbar-collapse collapse flex-grow-0"
      >
        <ul
          v-for="link in links"
          :key="link.id"
          class="d-flex flex-md-row flex-column text-md-left text-center justify-content-center align-self-center"
        >
          <li>
            <a
              :href="link.path"
              class="pl-3 pt-md-0 pt-1 font-weight-bold"
            >{{ link.name }}</a>
          </li>
          <!-- <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
            <NuxtLink to="/">
              Anasayfa
            </NuxtLink>
          </li>
          <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
            <a href="#about">Hakkımızda</a>
            <NuxtLink to="#about">
              Hakkımızda
            </NuxtLink>
          </li>
          <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
            <a href="https://icgiyim.com/" target="_blank">
              Online Satış
            </a>
          </li>
          <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
            <a href="#contact">İletişim</a>
            <NuxtLink to="#contact">
              İletişim
            </NuxtLink>
          </li>
          <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
            <a href="https://thermaluwear.com/" target="_blank">
              English
            </a>
          </li> -->
        </ul>
      </b-collapse>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [{
        id: 0,
        name: 'Ana Sayfa',
        path: '/'
      },
      {
        id: 1,
        name: 'Hakkımızda',
        path: '#about'
      },
      {
        id: 2,
        name: 'Online Satış',
        path: 'https://icgiyim.com/'
      },
      {
        id: 3,
        name: 'İletişim',
        path: '#contact'
      },
      {
        id: 4,
        name: 'English',
        path: 'https://thermaluwear.com/'
      }]
    }
  }
}
</script>

<style>
</style>
