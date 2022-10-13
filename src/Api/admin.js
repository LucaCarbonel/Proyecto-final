import axios from './http';
import { errorManageAuthorization } from './helpers/errorManage';
import { ID } from './helpers/getData';

const getAdmins = () => axios.get(
  `/admin`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/admin`)
  )
});

const postAdmin = (nombre, apellido, email, contraseña, img_perfil, latitud, longitud) => axios.get(
  `/admin/`,
  {
    nombre,
    apellido,
    email,
    contraseña,
    img_perfil,
    latitud,
    longitud,
    idAdmin: ID
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(
      `/admin/`,
      {
        nombre,
        apellido,
        email,
        contraseña,
        img_perfil,
        latitud,
        longitud,
        idAdmin: ID
      }
    )
  )
});

const getUserManage = () => axios.get(
  `/admin/manage`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/admin/manage`)
  )
});

const getUserManageForAdmin = (idAdmin) => axios.get(
  `/admin/manage/${idAdmin}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/admin/manage/${idAdmin}`)
  )
});

const getOneUserManage = (idUser) => axios.get(
  `/admin/manage/user/${idUser}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/admin/manage/user/${idUser}`)
  )
});

export {
  getAdmins,
  postAdmin,
  getUserManage,
  getUserManageForAdmin,
  getOneUserManage
}