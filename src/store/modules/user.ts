import { defineStore } from "pinia";
import { store } from "@/store";
import { systemLogin } from "@/utils/api/system";

const InitUserInfo = {
    role: -1,
    username: "",
    id: -1,
};

export const userStore = defineStore('users', {
    state: () => ({
        userDetail: InitUserInfo,
    }),
    getters: {
        role: state => state.userDetail.role,
        username: state => state.userDetail.username,
        id: state => state.userDetail.id,
    },
    actions: {
        async login(userInfo: { username: string, password: string }) {
            const res = await systemLogin(userInfo)
            if (res.code === 0) {
                console.log(res.data)
                this.userDetail = res.data
            } else {
                throw new Error(res.msg)
            }
        }
    }
})

export function getUserStore() {
    return userStore(store);
}