import Vue from "vue";
import Vuex from "vuex";

// импорты модулей, например
import localization from "./localization";
import navigation from "./navigation";
// import something from "./modules/something"

Vue.use(Vuex);

export default new Vuex.Store({
  strict: !Vue.config.productionTip,
  modules: {
    localization,
    navigation
  }
});
