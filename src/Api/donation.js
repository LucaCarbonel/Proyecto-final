import axios from './http';
import { errorManageAuthorization } from './helpers/errorManage';
import { ID } from './helpers/getData';

const getDonations = () => axios.get(
  `/donation`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/donation`)
  )
});

const getDonationsForUser = (idUser) => axios.get(
  `/donation/${idUser}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/donation/${idUser}`)
  )
});

const postDonation = (idUser, tipo, cantidad, valor_tokens, fecha, idCentro) => axios.post(
  `/donation/${idUser}`,
  {
    tipo,
    cantidad,
    valor_tokens,
    fecha,
    lugarId: idCentro,
    recolectorId: localStorage.getItem("ID")
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.post(
      `/donation/${idUser}`,
      {
        tipo,
        cantidad,
        valor_tokens,
        fecha,
        lugarId: idCentro,
        recolectorId: ID
      }
    )
  )
});


export {
  getDonations,
  getDonationsForUser,
  postDonation
}