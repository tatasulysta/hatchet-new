import axios from 'axios';

const setToken = () => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('auth')}`;
};

export { setToken };
