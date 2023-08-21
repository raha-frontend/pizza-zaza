import {createRouter, createWebHistory} from "vue-router";

import Home from "./pages/Home/index.vue";
import About from "./pages/About.vue";
import Contacts from "./pages/Contacts.vue";
import Cart from "./pages/Cart.vue";

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
        path: "/contacts",
        component: Contacts,
    },
    {
        path: "/cart",
        component: Cart,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
