import axios, { AxiosResponse } from "axios";

export const axiosInstanse = axios.create();

axiosInstanse.interceptors.response.use((response: AxiosResponse<any, any>) => {
  if (response.status === 200) {
    console.log("interceptor success");
    return response;
  }

  return response;
});
