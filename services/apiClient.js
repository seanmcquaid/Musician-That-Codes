import axios from 'axios';

const apiClient = axios.create({
  baseURL: '',
  headers: {},
  timeout: 10000,
});

export default apiClient;
