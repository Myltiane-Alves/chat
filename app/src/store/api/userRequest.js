import axios from 'axios';

const Api = axios.create({ baseURL: 'http://localhost:3333/' })

Api.interceptors.request.use((req) => {
    if(localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const getUser = (userId) => Api.get(`/users/${userId}`);
export const updateUser = (id, formData) => Api.put(`/users/${id}`, formData); 
export const getAllUsers = () => Api.get('/users');

