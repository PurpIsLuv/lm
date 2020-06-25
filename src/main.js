import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Глобальные компоненты
import MainLayout from "./layouts/MainLayout";

//plugins
import { i18n } from "./localization/i18n";

Vue.component("main-layout", MainLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
