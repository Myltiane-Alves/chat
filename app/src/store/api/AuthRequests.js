import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:6001' });

export const logIn= (formData)=> API.post('/chat',formData);

export const signUp = (formData) => API.post('/auth/register', formData);
