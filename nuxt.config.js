// import axios from "axios";
// let dynamicRoutes = () => {
//   return axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
//     return res.data.map(user => `/users/${user.id}`);
//   });
// };

import userRoutes from "./dynamicRoutes";

const dynamicRoutes = async () => await userRoutes();

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  router: {
    base: "/nuxt-test-dev"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-test-p3",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"]
  },
  generate: {
    routes: dynamicRoutes,
    dir: "docs"
  }
};
