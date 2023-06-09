import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "aos/dist/aos.css";

// // import * as Vue from "vue";
// import { BootstrapVue } from "bootstrap-vue";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project

createApp(App).use(store).use(router).mount("#app");
