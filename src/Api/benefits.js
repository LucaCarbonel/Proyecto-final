import axios from './http';
import { errorManageAuthorization } from './helpers/errorManage';
import { ID } from './helpers/getData';

const getBenefits = () => axios.get(
  `/benefits`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
}));

const getBenefitsForBenefactor = (idBenefactor) => axios.get(
  `/benefits/${idBenefactor}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/benefits/${idBenefactor}`,
    )
  )
});

const postBenefit = (descripcion, imagen, empresa, precio) => axios.post(
  `/benefits/${ID}`,
  {
    descripcion,
    imagen,
    empresa,
    precio
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.post(
      `/benefits/${ID}`,
      {
        descripcion,
        imagen,
        empresa,
        precio
      }
    )
  )
})

const editBenefit = (descripcion, imagen, empresa, precio, idBeneficio) => axios.put(
  `/benefits/${idBeneficio}`,
  {
    descripcion,
    imagen,
    empresa,
    precio
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.put(
      `/benefits/${idBeneficio}`,
      {
        descripcion,
        imagen,
        empresa,
        precio
      }
    )
  )
})

const useBenefit = (idUser,fecha, idBeneficio) => axios.post(
  `/benefits/use/${idBeneficio}`,
  {
    idUser,
    fecha,
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.post(
      `/benefits/use/${idBeneficio}`,
      {
        idUser,
        fecha,
      }
    )
  )
})

const ableBenefit = (idBeneficio) => axios.put(
  `/benefits/able/${idBeneficio}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.put(
      `/benefits/able/${idBeneficio}`,
    )
  )
})

const disableBenefit = (idBeneficio) => axios.put(
  `/benefits/disable/${idBeneficio}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.put(
      `/benefits/disable/${idBeneficio}`,
    )
  )
})

const allBenefitsUsed = () => axios.get(
  `/benefits/used`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(
      `/benefits/used`,
    )
  )
})

const oneBenefitUsed = (idBeneficio) => axios.get(
  `/benefits/used/${idBeneficio}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(
      `/benefits/used/${idBeneficio}`,
    )
  )
})

export {
  getBenefits,
  getBenefitsForBenefactor,
  postBenefit,
  editBenefit,
  useBenefit,
  ableBenefit,
  disableBenefit,
  allBenefitsUsed,
  oneBenefitUsed
}