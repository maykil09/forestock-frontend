import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import { apiUrl } from "@/services/variables";
import store from "@/state/store";

const BASE_URL = apiUrl;

const httpClient = axios.create({
  baseURL: BASE_URL,
});

httpClient.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    const state = store.getState();
    const token = state.auth.login.data?.token;

    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }

    config.headers.Authorization = token ? `Bearer ${token}` : "";

    const controller = new AbortController();
    config.signal = controller.signal;

    return config;
  }
);

httpClient.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      console.log("Session expired. Please login again.");
    }
    if (error.response.status === 403) {
      console.log("You are not authorized to access this resource.");
    }
    throw error;
  }
);

export default httpClient;
