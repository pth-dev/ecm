import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Create a base API client
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 seconds
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle session expiration
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Helper functions for API calls
export const get = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return apiClient
    .get<T, AxiosResponse<T>>(url, config)
    .then((response) => response.data);
};

export const post = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return apiClient
    .post<T, AxiosResponse<T>>(url, data, config)
    .then((response) => response.data);
};

export const put = <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return apiClient
    .put<T, AxiosResponse<T>>(url, data, config)
    .then((response) => response.data);
};

export const del = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return apiClient
    .delete<T, AxiosResponse<T>>(url, config)
    .then((response) => response.data);
};

export default apiClient;
