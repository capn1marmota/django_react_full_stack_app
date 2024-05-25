import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl = "https://4bbf4e53-3401-49f1-91d4-2eb0fd1c4122-dev.e1-us-east-azure.choreoapis.dev/djangoreactapp/backend/v1";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;