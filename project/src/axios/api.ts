import axios from 'axios';

const BACKEND_URL = 'https://11.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

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
  return api;
};
