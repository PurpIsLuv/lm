export default {
  state: {
    pages: [
      { link: "/main", title: "main" },
      { link: "/about", title: "about" },
      { link: "/CreateProject", title: "createProject" },
      { link: "/partners", title: "partners" },
      { link: "/clients", title: "clients" },
      { link: "/projects", title: "projects" },
      { link: "/contacts", title: "contacts" }
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
