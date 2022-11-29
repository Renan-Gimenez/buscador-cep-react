import axios from 'axios';

// 06992143352/jason/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;