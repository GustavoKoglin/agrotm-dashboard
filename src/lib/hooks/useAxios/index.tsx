import axios from "axios";
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import _ from "lodash";

const onRequest =
  (accessToken: string | undefined) =>
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (_.isEmpty(accessToken)) return config;

    const newConfig = { ...config } as AxiosRequestConfig;

    newConfig.headers.authorization = `Bearer ${accessToken}`;

    return newConfig;
  };

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

function useAxios(): AxiosInstance {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("@auth/access_token")
      : null;

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  api.interceptors.request.use(onRequest(token), onRequestError);
  api.interceptors.response.use(onResponse, onResponseError);

  return api;
}

export default useAxios;
