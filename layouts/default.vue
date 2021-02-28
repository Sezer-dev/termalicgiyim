<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  background: #f5f7fa !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.logo img {
  width: auto;
  height: 50px;
}

img{
  border-style: none;
}

a.nuxt-link-exact-active, a{
  text-decoration: none !important;
  color: #3a3a3a !important;
}

small{
  font-size: xx-small !important;
}

ul{
  list-style: none;
  padding:0 !important;
  margin: 0 !important;
}
</style>
