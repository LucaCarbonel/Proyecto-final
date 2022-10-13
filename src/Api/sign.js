import axios from './http';
import { refreshToken } from './helpers/tokens';

const signIn = (email, password) => axios.post(
  `/users/signin`,
  {
    email,
    contraseña: password,
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
}));

const signOut = () => axios.delete(
  `/users/signout`,
  {
    token: refreshToken
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
}));

export {
  signIn,
  signOut
}