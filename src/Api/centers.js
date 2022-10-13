import axios from './http';
import { ID } from './helpers/getData';
import { errorManageAuthorization } from './helpers/errorManage';

const getCenters = () => axios.get(
  `/centers`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
}));

const postCenters = (nombre, imagen, latitud, longitud) => axios.post(
  `/centers/${ID}`,
  {
    nombre,
    imagen,
    latitud,
    longitud
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.post(
      `/centers/${ID}`,
      {
        nombre,
        imagen,
        latitud,
        longitud
      }
    )
  )
})

const getDonationInCenter = (idCentro) => axios.get(
  `/centers/${idCentro}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/centers/${idCentro}`)
  )
})

const editCenter = (idCentro, nombre, imagen, latitud, longitud) => axios.put(
  `/centers/${idCentro}`,
  {
    nombre,
    imagen,
    latitud,
    longitud,
    idRecolector: localStorage.getItem("ID")
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.put(
      `/centers/manage/${idCentro}`,
      {
        nombre,
        imagen,
        latitud,
        longitud
      }
    )
  )
});

const getManageOfCenter = (idCentro) => axios.get(
  `/centers/manage/${idCentro}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/centers/manage/${idCentro}`)
  )
});

export {
  getCenters,
  postCenters,
  getDonationInCenter,
  editCenter,
  getManageOfCenter
}