import Vue from "vue";
import Vuex from "vuex";

// импорты модулей, например
// import something from "./modules/something"

Vue.use(Vuex);

export default new Vuex.Store({
  strict: !Vue.config.productionTip,
  modules: {}
});
