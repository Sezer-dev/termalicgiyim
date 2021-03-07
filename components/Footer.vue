<template>
  <footer
    class="container d-flex flex-md-row flex-column justify-content-between align-items-center bg-white p-5 mt-5"
  >
    <div>
      <Logo />
    </div>
    <div class="d-flex align-items-center my-3 my-md-0">
      <p class="font-weight-bold m-0 text-md-start text-center">
        {{ this.$t("footer.right") }}
      </p>
    </div>
    <div>
      <a href="https//ravertan.com">
        <img
          class="ravertan-logo"
          src="~/assets/ravertan-logo.png"
          alt="ravertan logo"
        />
      </a>
    </div>
  </footer>
</template>

<style scoped>
a {
  color: black;
}
a:hover {
  text-decoration: none;
  color: black;
}
.ravertan-logo {
  width: auto;
  height: 63px;
}
</style>
