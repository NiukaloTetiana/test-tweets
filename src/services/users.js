import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6578508af08799dc8044e406.mockapi.io/',
});

export const getUsers = async () => {
  try {
    const { data } = await instance.get('/users');
    return data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }
};
