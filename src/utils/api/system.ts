import request from '@/utils/request'

declare namespace Login {
    type Input = {
        username: string,
        password: string
    }
    type Output = {
        code: number,
        data: {
            token: string,
            userInfo: {
                roles: string[]
            }
        }
        msg: string
    }
}

/**
 * Login Controller
 */
export const systemLogin = (data: Login.Input): Promise<Login.Output> => {
    return request.post('/api/login', data)
}

