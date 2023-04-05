import axios from 'axios';

// api instance axios to interract with api backend

const api = axios.create({

    baseURL: 'http://localhost:8000',
    

});

export default api;
