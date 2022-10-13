import axios from './http';
import { errorManageAuthorization } from './helpers/errorManage';

const getDonors = () => axios.get(
  `/users/donors`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/users/donors`)
  )
});

const postUser = (nombre, apellido, email, contraseña, img_perfil, latitud, longitud) => axios.post(
  `/users/`,
  {
    nombre,
    apellido,
    email,
    contraseña,
    img_perfil,
    latitud,
    longitud,
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  return(err)
});

const getUsers = () => axios.get(
  `/users/`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/users`)
  )
});

const getUser = (idUser) => axios.get(
  `/users/${idUser}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/users/${idUser}`)
  )
});

const editUser = (idUser, nombre, apellido, contraseña, img_perfil, latitud, longitud) => axios.put(
  `/users/${idUser}`,
  {
    nombre,
    apellido,
    contraseña,
    img_perfil,
    latitud,
    longitud,
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.put(
      `/users/${idUser}`,
      {
        nombre,
        apellido,
        contraseña,
        img_perfil,
        latitud,
        longitud,
      }
    )
  )
});

export {
  getDonors,
  getUsers,
  getUser,
  editUser,
  postUser
}