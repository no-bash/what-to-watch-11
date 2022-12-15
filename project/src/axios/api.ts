import axios, {AxiosError, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';

const BACKEND_URL = 'https://11.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const shouldDisplayError = (respone: AxiosResponse) => respone.status === 401 || respone.status === 404 || respone.status === 400 || respone.status === 403;

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use((cfg) => {
    const token = localStorage.getItem('token') || '';
    if(!cfg.headers) {return;}
    cfg.headers['x-token'] = token;
    return cfg;
  });
  api.interceptors.response.use((responce) => responce, (error: AxiosError<{error:string}>) => {
    if(error.response?.status && shouldDisplayError(error.response)) {
      toast.warn(error.response.data.error);
    }
    throw error;
  });
  return api;
};
