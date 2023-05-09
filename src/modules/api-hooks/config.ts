import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://820b-219-100-37-234.ngrok-free.app',
  headers: {
    'Content-type': 'application/json',
    'ngrok-skip-browser-warning': true,
  },
});

export const httpClientWithBearer = axios.create({
  baseURL: 'https://820b-219-100-37-234.ngrok-free.app',
  headers: {
    'Content-type': 'application/json',
    'ngrok-skip-browser-warning': true,
    Authorization: `Bearer ${
      typeof window !== 'undefined' && localStorage.getItem('auth')
    }`,
  },
});
