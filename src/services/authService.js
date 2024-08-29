import api from './api';

export const login = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    if (response.data.jwt) {
      const user = {
        username: username,
        token: response.data.jwt
      };
      localStorage.setItem('user', JSON.stringify(user));
    }
    return response.data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};

export const logout = () => {
  try {
    localStorage.removeItem('user');
  } catch (error) {
  }
};

export const getCurrentUser = () => {
  try {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  } catch (error) {
    return null;
  }
};