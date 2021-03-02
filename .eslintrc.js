module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
    "prettier"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {}
};
