import apiClient from './apiClient';

export default {
  getPosts: () => apiClient.get('/posts'),
  getPost: (id) => apiClient.get(`/post/${id}`),
  addPost: () => apiClient.post('/addPost'),
  editPost: () => apiClient.patch('/editPost'),
  deletePost: () => apiClient.delete('/deletePost'),
};
