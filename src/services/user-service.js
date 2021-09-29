import axios from "axios";
import {baseUrl, headers} from "./API";


export const getUser = (id) => {
  const url = baseUrl + `users/${id}`;
  const response = axios.get(url, { headers });
  return response;
};

export const createUser = (params) => {
  const url = baseUrl + `users/`;
  const response = axios.post(url, params, { headers });
  return response;
};

export const deleteUser = (id) => {
  const url = baseUrl + `users/${id}`;
  const response = axios.delete(url, { headers });
  return response;
};

export const updateUser = (id,params) => {
  const url = baseUrl + `users/${id}`;
  const response = axios.put(url, params, { headers });
  return response;
};