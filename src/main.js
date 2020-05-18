import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Глобальные компоненты
import MainLayout from "./layouts/MainLayout";

Vue.component("main-layout", MainLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
