import apiClient from './apiClient';

export default {
  getPosts: () => apiClient.get('/posts'),
  addPost: () => apiClient.post('/addPost'),
  editPost: () => apiClient.patch('/editPost'),
  deletePost: () => apiClient.delete('/deletePost'),
};
