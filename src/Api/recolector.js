import axios from './http';
import { errorManageAuthorization } from './helpers/errorManage';
import { ID } from './helpers/getData';

const getRecolectors = () => axios.get(
  `/recolector`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(
      `/recolector`,
    )
  )
});

const getRecolector = (idRecolector) => axios.get(
  `/recolector/${idRecolector}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(
      `/recolector/${idRecolector}`,
    )
  )
});

const postRecolector = (lugarId, nombre, apellido, email, contraseña, img_perfil, latitud, longitud, fecha) => axios.post(
  `/recolector/${lugarId}`,
  {
    nombre,
    apellido,
    email,
    contraseña,
    img_perfil,
    latitud,
    longitud,
    fecha,
    idAdmin: ID
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.post(
      `/recolector/${lugarId}`,
      {
        nombre,
        apellido,
        email,
        contraseña,
        img_perfil,
        latitud,
        longitud,
        fecha,
        idAdmin: ID
      }
    )
  )
});

export {
  getRecolector,
  getRecolectors,
  postRecolector
}