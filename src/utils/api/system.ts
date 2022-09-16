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
type UserInfo = {
    userDetail: {
        id: string
        username: string
        role: number
    }
}

/**
 * Login Controller
 */
export const systemLogin = (data: LoginInput): ApiResponse<LoginOutput> => {
    return request.post('/users/login', data)
}
/** 
 * Logout Controller
 */
export const systemLogout = (): ApiResponse => {
    return request.post('/users/logout')
}
/**
 * User Detail
 */
export const systemUserDetail = (): ApiResponse<UserInfo> => {
    return request.get('/users/detail')
}