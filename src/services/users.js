import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6578508af08799dc8044e406.mockapi.io/',
});

export const getUsers = async () => {
  try {
    // Використовуємо instance.get для виконання GET-запиту до `/users`
    const { data } = await instance.get('/users');

    return data;
  } catch (error) {
    // Обробляємо помилку, якщо вона виникне
    console.error('Error fetching users:', error.message);
    throw error; // Якщо потрібно обробити помилку вище, можна викинути її далі
  }
};

export const updateUsers = async (id, followers, following) => {
  try {
    const { data } = await instance.put(`/users/${id}`, {
      followers,
      following,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
