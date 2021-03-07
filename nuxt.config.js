export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Termal İç Giyim",
    htmlAttrs: {
      lang: "tr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://termalicgiyim.com/favicon.ico"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/Carousel.client.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    [
      "nuxt-i18n",
      {
        locales: ["en", "tr"],
        defaultLocale: "tr",
        vueI18n: {
          fallbackLocale: "tr",
          messages: {
            en: {
              navigations: {
                home: "Home",
                aboutus: "About Us",
                onlineShopping: "Online Shopping",
                contact: "Contact Us"
              },
              hero: {
                text1:
                  "Stay away from the cold weather with our thermal underwear collection.",
                text2:
                  "Smart thermal fabrics lock your body heat so you stay warm even in the harshest winter conditions."
              },
              aboutus: {
                title: "ABOUT US",
                text:
                  "Founded in 1924 by Hüseyin Küçükaslan, Thermal Underwear company in a short period of time became Turkey's leading brand in underwear clothing. Manufacturer of wool, thermal and cotton underwear, shapers, bamboo shapers, socks, pajamas and boxer types & with up to 30 knitting machines, producing its own needs of fabrics in house. With its employees and executives who have adopted innovation; working without sacrificing customer satisfaction and quality is the fundamentals of the company's understanding of service."
              },
              contact: {
                title: "CONTACT",
                adress: "Adress",
                requests:
                  "You can contact us for your wholesale thermal clothing purchase requests.",
                infoMail: "info@kucukaslantekstil.com"
              },
              faq: {
                benefits: "What is the benefits of thermal underwear?",
                benAnswer: [
                  "Thermal underwear is a two-piece garment that is worn as a bottom and top to keep the body warm in wind, fog, sleet or harsh snow. This garment is normally long to the feet and long sleeved to the ankles and is worn by direct skin contact. It traps body heat to provide warmth to the body. The two pieces of the thermal suit are independent of each other, so you can choose to wear the top or bottom as per need",
                  "Thermal underwear is normally long to the feet and long sleeves to the ankles, but it does not appeal to women who love to wear dresses such as short undershirts and short sleeve blouses. But now, Halis Termal creates different styles that fit well with any garment. There is now the option to choose short undershirts and sleeveless thermal underwear. It is a great way for professional women to stay comfortably warm where they cannot wear long sleeves jackets or blouses. Men can also wear short sleeves or sleeveless thermal clothing under casual clothes such as T-shirts."
                ],
                fabrics:
                  "Which fabrics being used to make a thermal underwear?",
                fabAnswer: [
                  "Both natural and synthetic fabrics are used to produce thermal underwear. Wool and cotton fabrics have long been used to produce clothing for the winter season because these natural materials have excellent strength to keep warmth. Today, synthetics such as polypropylene, polyester and nylon are also used. However, most thermal suits are made from a mixture of natural and synthetic fabrics. 100% natural wool and cotton clothes absorb moisture and when sweaty wet clothes remain on the skin for a long time, it causes people to become sick again. For this reason, thermal fabric mixtures resulting from scientific research and development studies trap moisture and dry instantly. The garment doesn't stay wet and keeps people warm."
                ],
                features: "Which features a thermal underwear needs to have?",
                featAnswer: [
                  "It should be light.",
                  "It should be comfortable and flexible",
                  "It should fit actively, meaning it should fit easily under a shirt and a pair of trousers",
                  "It should help regulate the body temperature"
                ]
              },
              products: {
                beret: "Thermal Beret",
                collar: "Thermal Collar",
                athlet: "Thermal Atlet",
                shirt: "Thermal Shirt",
                "t-shirt": "Thermal T-Shirt",
                mask: "Thermal Mask"
              },
              footer: {
                right: "© Thermal Underwear 2020 - All rights reserved."
              }
            },
            tr: {
              navigations: {
                home: "Anasayfa",
                aboutus: "Hakkımızda",
                onlineShopping: "Online Alışveriş",
                contact: "İletişim"
              },
              hero: {
                text1:
                  "Termal iç giyim koleksiyonumuz ile soğuktan uzak durun.",
                text2:
                  "Akıllı termal kumaşlar ısıyı kilitler, böylece en zorlu kış koşullarında bile sıcacık kalırsınız."
              },
              aboutus: {
                title: "HAKKIMIZDA",
                text:
                  "1924 yılında Hüseyin Küçükaslan tarafından kurulan Termal İç Giyim kısa zamanda iç giyimde Türkiye’nin en önde gelen markası haline gelmiştir. İnovasyonu kendine vizyon edinmiş çalışanları ve yöneticileri ile yün, termal ve pamuk içlikler, pijama ve boxer çeşitleri, interlok pamuk-yün kumaş üretmektedir. Müşteri memnuniyetinden ve kaliteden ödün vermeden çalışmak şirketin hizmet anlayışının temelini oluşturur."
              },
              contact: {
                title: "İLETİŞİM",
                adress: "Adres",
                requests:
                  "Toptan termal giyim alım talepleriniz için iletişime geçebilirsiniz.",
                infoMail: "bilgi@kucukaslantekstil.com"
              },
              faq: {
                benefits: "Termal iç giyimin faydaları nelerdir?",
                benAnswer: [
                  "Termal iç çamaşırı, rüzgâr, sis, karla karışık yağmur veya karlı sert havalarda vücudu sıcak tutmak için alt ve üst olarak giyilen iki parçalı giysidir. Bu kıyafet normalde ayaklara kadar uzun ve bileklere kadar uzun kolludur ve direkt cilde temas edilerek giyilir. Vücuda sıcaklık sağlamak için vücut ısısını hapseder. Termal giysinin iki parçası birbirinden bağımsız olduğundan, ihtiyaca göre üst veya alt kısmı giymeyi seçebilirsiniz.",
                  "Termal iç çamaşırı normalde ayaklara kadar uzun ve bileklere kadar uzun kolludur, ancak kısa alt içlik ve kısa kollu bluzlar gibi elbiseler giymeyi seven kadınlara hitap etmez. Ancak şimdi halis termal, her türlü giysiye iyi uyan farklı stiller yaratıyor. Artık kısa alt içlik ve kolsuz termal iç çamaşırını seçme seçeneği var. Profesyonel kadınların uzun kollu ceket veya bluz giyemedikleri yerlerde rahatça sıcak kalmaları için harika bir yoldur. Erkekler de ayrıca tişört gibi gündelik kıyafetlerin altında kısa kollu veya kolsuz termal kıyafetler giyebilirler."
                ],
                fabrics:
                  "Termal iç çamaşırı yapımında kullanılan çamaşırlar nelerdir?",
                fabAnswer: [
                  "Termal iç çamaşırları üretmek için hem doğal hem de sentetik kumaşlar kullanılır. Yün ve pamuklu kumaşlar uzun zamandır kış mevsimi için kıyafet üretmek için kullanılmıştır, çünkü bu doğal malzemeler sıcaklığı tutmak için mükemmel güce sahiptir. Günümüzde polipropilen, polyester ve naylon gibi sentetikler de kullanılmaktadır. Ancak, termal giysilerin çoğu doğal ve sentetik kumaşların bir karışımından yapılır. %100 doğal olan yün ve pamuklu giysiler nemi emer ve terli ıslak giysi tende uzun süre kaldığında insanı tekrardan hasta olmasına neden olur. Bu sebeple bilimsel araştırma ve geliştirme çalışmalarının sonucunda ortaya çıkan termal kumaş karışımları nemi hapseder ve anında kurur. Giysi ıslak kalmaz ve insanları sıcak tutmaya devam eder."
                ],
                features:
                  "İdeal bir termal iç çamaşırının özellikleri nelerdir?",
                featAnswer: [
                  "Hafif olmalıdır. Rahat ve esnek yapıda olmalıdır. Aktif uyum sağlamalıdır, bir gömlek ve bir çift pantolonun altına kolayca sığması gerektiği anlamına gelir. Vücut sıcaklığını düzenlemeye yardımcı olmalıdır."
                ]
              },
              products: {
                beret: "Termal Bere",
                collar: "Termal Boyunluk",
                athlet: "Termal Sıfır Kol T-Shirt",
                shirt: "Termal Uzun Kol T-Shirt",
                "t-shirt": "Termal Kısa Kol T-Shirt",
                mask: "Termal Maske"
              },
              footer: {
                right: "© Termal İç Giyim 2020 - Tüm hakları saklıdır."
              }
            }
          }
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
