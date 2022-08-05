import router from "./router";

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
})