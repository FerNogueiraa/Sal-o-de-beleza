import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Interceptor para lidar com respostas e erros
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Token expirado ou inválido
            localStorage.removeItem('token');
            // Redirecionar para login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;