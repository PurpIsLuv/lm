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
  }
];

const router = new VueRouter({ routes });

export default router;
