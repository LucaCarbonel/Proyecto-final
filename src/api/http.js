import axios from 'axios';

const HTTP = axios.create({
  baseURL: 'http://10.1.5.50:3001',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default HTTP;
