import axios from './http';
import { errorManageAuthorization } from './helpers/errorManage';
import { ID } from './helpers/getData';

const getBenefactors = () => axios.get(
  `/benefactor`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/benefactor`,))
});

const getBenefactor = (idBenefactor) => axios.get(
  `/benefactor/${idBenefactor}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/benefactor/${idBenefactor}`,))
});

const postBenefactor = (nombre, apellido, email, contraseña, img_perfil, latitud, longitud, empresa, fecha) => axios.post(
  `/benefactor`,
  {
    nombre,
    apellido,
    email,
    contraseña,
    img_perfil,
    latitud,
    longitud,
    empresa,
    fecha,
    idAdmin: ID,
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.post(
      `/benefactor`,
      {
        nombre,
        apellido,
        email,
        contraseña,
        img_perfil,
        latitud,
        longitud,
        fecha,
        idAdmin: ID,
      }
    )
  )
});

const editBenefactorCompany = (empresa) => axios.put(
  `/users/${ID}/company`,
  {
    empresa
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.put(
      `/users/${ID}/company`,
      {
        empresa
      }
    )
  )
});

export {
  getBenefactor,
  getBenefactors,
  postBenefactor,
  editBenefactorCompany
}