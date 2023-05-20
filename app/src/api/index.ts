import axios, { AxiosResponse } from "axios";
import { User } from "../interfaces/user";

// const API_URL = process.env.REACT_APP_API_URL;

interface ILogin {
  status?: boolean;
  user?: User;
  msg?: string;
}

interface ISetAvatar {
  image: string;
  isSet: boolean;
}

export const host = `http://localhost:6001`;

const API = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json",
    
  }

});

export const login = (formData: {
    password: string;
    document: string;
}): Promise<AxiosResponse<ILogin>> => API.post("/api/auth/login", formData); 