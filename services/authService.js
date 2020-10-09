import apiClient from './apiClient';

export default {
  login: () => apiClient.post('/login'),
  logout: () => apiClient.post('/logout'),
};
