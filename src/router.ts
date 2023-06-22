import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import Contacts from "./pages/Contacts.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
