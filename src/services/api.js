import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://192.168.101.46:8080/api', // Ajuste conforme a URL do seu backend
});

export default Api;