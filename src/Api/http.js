import axios from 'axios';
import { accessToken } from './helpers/tokens';

const HTTP = axios.create({
  baseURL: `http://localhost:3001`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ accessToken
  },
});


export default HTTP;