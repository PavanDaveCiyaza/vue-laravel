import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Prectis from "../views/Prectis.vue";
import Leyout from "../components/Leyout.vue";
import AuthLeyout from "../components/AuthLeyout.vue"
import store from "../store/index"

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: Leyout,
        meta: { requiresAuth: true },
        children: [
            { path: "/dashboard", name: "Dashboard", component: Dashboard },
        ],
    },
    {
        path: "/auth",
        name: "Auth",
        redirect: "/login",
        component:AuthLeyout,
        children: [
            {
                path: "/login",
                name: "Login",
                component: Login,
            },
            {
                path: "/register",
                name: "Register",
                component: Register,
            },
        ],
    },

    {
        path: "/prectis",
        name: "Prectis",
        component: Prectis,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else if (
        store.state.user.token &&(to.name === "Login" || to.name === "Register")
    ) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});
export default router;
