import { defineStore } from "pinia";
import { store } from "@/store";
import { systemLogin } from "@/utils/api/system";

type IUserInfo = {
    roles: any[];
}

const InitUserInfo: IUserInfo = {
    roles: [],
};

export const userStore = defineStore('users', {
    state: () => ({
        userInfo: InitUserInfo,
    }),
    getters: {
        roles: state => state.userInfo?.roles,
    },
    actions: {
        async login(userInfo: { username: string, password: string }) {
            const { data } = await systemLogin(userInfo);
        }
    }
})

