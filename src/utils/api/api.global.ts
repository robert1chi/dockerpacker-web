/**
 * Global declaration of the API.
 */

import { AxiosPromise } from "axios";

interface DefaultResponse<T = object>  {
    code: number,
    data: T,
    msg?: string
}

export declare interface ApiResponse<U> extends Promise<DefaultResponse<U>> {
}
