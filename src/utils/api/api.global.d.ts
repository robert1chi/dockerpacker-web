/**
 * Global declaration of the API.
 */

import { AxiosPromise } from "axios";

interface DefaultResponse<T = any> {
    code: number,
    data: T,
    msg?: string
}

export declare interface ApiResponse<U = any> extends Promise<DefaultResponse<U>> {
}
