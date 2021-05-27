import axios from 'axios';

export const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '05f14b1a58f6d9982936606aca1d11ad',
    language: 'es-ES',
  },
});
