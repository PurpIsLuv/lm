import Vue from "vue";
import VueI18n from "vue-i18n";

//Language import
import ru from "./langs/ru/ru";
import en from "./langs/en/en";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages: {
    ru,
    en
  }
});
