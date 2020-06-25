import { i18n } from "@/localization/i18n";

export default {
  state: {
    pages: [
      { link: "/main", title: i18n.t("main") },
      { link: "/about", title: i18n.t("about") },
      { link: "/CreateProject", title: i18n.t("createProject") },
      { link: "/partners", title: i18n.t("partners") },
      { link: "/clients", title: i18n.t("clients") },
      { link: "/projects", title: i18n.t("projects") },
      { link: "/contacts", title: i18n.t("contacts") }
    ]
  },
  actions: {},
  mutations: {},
  getters: {
    getNavigationPages(state) {
      return state.pages;
    }
  }
};
