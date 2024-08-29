import api from './api';

export const getProducts = () => api.get('/produtos');
export const getProduct = (id) => api.get(`/produtos/${id}`);
export const createProduct = (product) => api.post('/produtos', product);
export const updateProduct = (id, product) => api.put(`/produtos/${id}`, product);
export const deleteProduct = (id) => api.delete(`/produtos/${id}`);
