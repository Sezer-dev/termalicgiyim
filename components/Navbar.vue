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
          class="d-flex flex-md-row flex-column text-md-left text-center justify-content-center align-self-center"
        >
          <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
            <NuxtLink to="/">
              Anasayfa
            </NuxtLink>
          </li>
          <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
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
            <NuxtLink to="#contact">
              İletişim
            </NuxtLink>
          </li>
          <li class="pl-3 pt-md-0 pt-1 font-weight-bold">
            <a href="https://thermaluwear.com/" target="_blank">
              English
            </a>
          </li>
        </ul>
      </b-collapse>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
