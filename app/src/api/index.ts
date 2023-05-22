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

export const host = `http://localhost:3001`;

const API = axios.create({
  baseURL: host,

});

export const login = (formData: {
    password: string;
    cpf: string;
}): Promise<AxiosResponse<ILogin>> => API.post("/api/auth/login", formData);

export const signUp = (formData:{
    cpf: string;
    username: string;
    email: string;
    password: string;
}) => API.post("/api/auth/register", formData);

export const setProfileAvatar = (
    id: string,
    avatar: string
  ): Promise<AxiosResponse<ISetAvatar>> =>
    API.post(`/api/auth/setAvatar/${id}`, { image: avatar });
  
  export const getAllUsers = (
    currentUserId: string
  ): Promise<AxiosResponse<User[]>> =>
    API.get(`/api/auth/allUsers/${currentUserId}`);
  
  export const sendMessage = (
    from: string,
    to: string,
    message: string,
    image: string = ""
  ) => {
    API.post(`/api/messages/addMessage`, { from, to, message, image });
  };
  
  export const getAllMessages = (from: string, to: string) =>
    API.post(`api/messages/getMessages`, { from, to });
  