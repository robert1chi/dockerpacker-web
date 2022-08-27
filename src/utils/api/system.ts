import request from '@/utils/request'
import { ApiResponse } from './api.global'

type LoginInput = {
    username: string,
    password: string
}
type LoginOutput = {
    token: any
    userInfo: {
        roles: string[]
    }
}

/**
 * Login Controller
 */
export const systemLogin = (data: LoginInput): ApiResponse<LoginOutput> => {
    return request.post('/users/login', data)
}

