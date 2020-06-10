import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Projects from "../views/Projects";

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
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({ routes });

export default router;
