import {createRouter, createWebHistory} from "vue-router";

import Home from "./pages/Home.vue";
import Snacks from "./pages/Snacks.vue";
import Beverages from "./pages/Beverages.vue";
import Sauces from "./pages/Sauces.vue";
import Desserts from "./pages/Desserts.vue";
import Hotter from "./pages/Hotter.vue";
import Combo from "./pages/Combo.vue";
import Joy from "./pages/Joy.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/snacks",
        component: Snacks,
    },
    {
        path: "/beverages",
        component: Beverages,
    },
    {
        path: "/sauces",
        component: Sauces,
    },
    {
        path: "/desserts",
        component: Desserts,
    },
    {
        path: "/hotter",
        component: Hotter,
    },
    {
        path: "/combo",
        component: Combo,
    },
    {
        path: "/joy",
        component: Joy,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
