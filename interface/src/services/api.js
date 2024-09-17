import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

api.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        // Token expirado ou inválido
        localStorage.removeItem('token');
        // Redirecionar para login ou atualizar token
      }
      return Promise.reject(error);
    }
  );


export default api