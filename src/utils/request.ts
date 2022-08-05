import router from "@/router";
import axios from "axios";

const env = process.env.NODE_ENV;

const CODE = {
    LOGIN_TIMEOUT: 1000,
    REQUEST_SUCCESS: 0,
    REQUEST_FOBID: 4,
  };
  
  const instance = axios.create({
    baseURL: env,
    timeout: 1000,
    withCredentials: false,
  });
  
  instance.interceptors.request.use((config) => config);
  
  instance.defaults.timeout = 5000;
  
  instance.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        const { data } = response;
        if (data.code === CODE.REQUEST_SUCCESS) {
          return data;
        } else if(data.code === CODE.REQUEST_FOBID) {
          router.push({path:'/login'})
        }
      }
      return response;
    },
    async (err) => {
      const { config } = err;
  
      if (!config || !config.retry) return Promise.reject(err);
  
      config.retryCount = config.retryCount || 0;
  
      if (config.retryCount >= config.retry) {
        return Promise.reject(err);
      }
  
      config.retryCount += 1;
  
      const backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, config.retryDelay || 1);
      });
  
      await backoff;
        return await instance(config);
    },
  );
  
  export default instance;  