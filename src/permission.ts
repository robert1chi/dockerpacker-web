import router from "./router";
import Cookies from "js-cookie";

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (Cookies.get("HAS_LOGIN") === "true") {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
        }
    } else {
        next();
    }
})