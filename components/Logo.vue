<template>
  <NuxtLink to="/" class="logo d-flex flex-column">
    <img
      v-if="$i18n.locale === 'tr'"
      src="~/assets/logo.png"
      alt="termal ic giyim logo"
    />
    <img
      v-else
      src="https://thermaluwear.com/_nuxt/img/logo.a361cb4.png"
      alt="termal ic giyim logo"
    />
    <small class="font-weight-bold text-right">By Küçükaslan Tekstil</small>
  </NuxtLink>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped>
.logo img {
  width: auto;
  height: 50px;
}
</style>
