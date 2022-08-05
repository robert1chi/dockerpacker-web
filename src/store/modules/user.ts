import { defineStore } from "pinia";
import { TOKEN_NAME } from "@/config/global";
import { store } from "@/store";

const InitUserInfo = {
    roles: [],
};


export const userStore = defineStore('users', {
    state: () => ({
        token: localStorage.getItem(TOKEN_NAME),
        userInfo: InitUserInfo,
    }),
    getters: {
        roles: state => state.userInfo.roles,
    },
    actions: {
        async login(userInfo: { username: string, password: string }) {

        }
    }
})