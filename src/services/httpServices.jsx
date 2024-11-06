import { message } from "antd";
import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_URL}`,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = sessionStorage.getItem("accessToken");
  return {
    ...config,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  };
});
const responseBody = (response) => response.data;

const errorBody = (error) => {
  if (
    error &&
    error.response.data &&
    error.response.data.message &&
    error.response.data.message === "Authentication failed. Invalid token."
  ) {
    message.error("Session expired. Please login again");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else {
    throw error;
  }
};

const requests = {
  get: (url, body) =>
    instance.get(url, body).then(responseBody).catch(errorBody),

  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody).catch(errorBody),

  put: (url, body) =>
    instance.put(url, body).then(responseBody).catch(errorBody),
  patch: (url, body) =>
    instance.patch(url, body).then(responseBody).catch(errorBody),
  delete: (url, body) =>
    instance.delete(url, body).then(responseBody).catch(errorBody),
};

export default requests;
