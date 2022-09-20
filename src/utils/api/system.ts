import request from '@/utils/request'
import { ApiResponse } from './api.global'

type LoginInput = {
    username: string,
    password: string
}
type UserInfo = {
    role: number,
    id: number,
    username: string
}

/**
 * Login Controller
 */
export const systemLogin = (data: LoginInput): ApiResponse<UserInfo> => {
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