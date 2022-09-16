import request from "@/utils/request";
import { ApiResponse } from "./api.global";

type IDashboard = {
    dashboard: {
        status: number
        containerList: {
            id: number
            name: string
            status: number
        }[]
    }
}
const dashboardStatus = (): ApiResponse<IDashboard> => {
    return request.post('/home')
}

export type { IDashboard }
export { dashboardStatus }