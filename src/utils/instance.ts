import axios, { AxiosError, type AxiosResponse } from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10 * 6000,
    headers: {
        "Accept": "application/json"
    }
})

instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        console.log("Axios, Error: ", error.message);
        return Promise.reject(error);
    },
)

export default instance;