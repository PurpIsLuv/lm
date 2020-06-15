import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

/**
 * Все страницы, кроме Home, используют
 * динамический импорт, например:
 *
 * {
 *    path: "/about",
 *    name: "About",
 *    component: ( ) => import("../views/About")
 * }
 */

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/Main")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/Projects")
  },
  {
    path: "/CreateProject",
    name: "CreateProject",
    component: () => import("@/views/CreateProject")
  }
];

const router = new VueRouter({ routes });

export default router;
