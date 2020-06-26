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
    ],
    linksSocial: [
      { name: "Facebook", link: "#" },
      { name: "Twitter", link: "#" },
      { name: "Gmail", link: "#" },
      { name: "Instagram", link: "#" }
    ],
    linksItem: [
      {
        title: "ourProject",
        subtitles: [
          { link: "#", subtitle: "businessDating" },
          { link: "#", subtitle: "globalGame" },
          { link: "#", subtitle: "charity" }
        ]
      },
      {
        title: "about",
        subtitles: [
          { link: "#", subtitle: "specialProject" },
          { link: "#", subtitle: "partners" },
          { link: "#", subtitle: "contacts" }
        ]
      },
      {
        title: "help",
        subtitles: [
          { link: "#", subtitle: "frequentQuestion" },
          { link: "#", subtitle: "serviceRules" },
          { link: "#", subtitle: "askQuestion" }
        ]
      }
    ]
  },
  actions: {},
  mutations: {},
  getters: {
    getNavigationPages(state) {
      return state.pages;
    },
    getLinksSocial(state) {
      return state.linksSocial;
    },
    getLinksItem(state) {
      return state.linksItem;
    }
  }
};
