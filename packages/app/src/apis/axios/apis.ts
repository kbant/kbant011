import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import client from './client';

export const HttpClient = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return client.get<T, AxiosResponse<T>>(url, config);
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return client.delete<T, AxiosResponse<T>>(url, config);
  },

  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return client.head<T, AxiosResponse<T>>(url, config);
  },

  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return client.options<T, AxiosResponse<T>>(url, config);
  },

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return client.post<T, AxiosResponse<T>>(url, data, config);
  },

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return client.put<T, AxiosResponse<T>>(url, data, config);
  },

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return client.patch<T, AxiosResponse<T>>(url, data, config);
  },

  setCommonHeader(key: string, value: string) {
    client.defaults.headers.common[key] = value;
  },

  deleteCommonHeader(key: string) {
    delete client.defaults.headers.common[key];
  },
};
