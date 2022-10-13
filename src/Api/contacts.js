import axios from './http';
import { errorManageAuthorization } from './helpers/errorManage';

const getContacts = () => axios.get(
  `/contacts`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/contacts`)
  )
});

const getContact = (idContacto) => axios.get(
  `/contacts/${idContacto}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.get(`/contacts/${idContacto}`)
  )
});

const postContact = (logo, link) => axios.post(
  `/contacts`,
  {
    logo,
    link
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.post(`/contacts`),
    {
      logo,
      link
    }
  )
});

const editContacto = (logo, link, idContacto) => axios.put(
  `/contacts/${idContacto}`,
  {
    logo,
    link
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  errorManageAuthorization(err,
    axios.put(`/contacts/${idContacto}`),
    {
      logo,
      link
    }
  )
});

const incrementInteractionsContact = (idContacto) => axios.put(
  `/contacts/interact/${idContacto}`,
).then((response) => ({
  data: response.data,
  headers: response.headers,
})).catch((err) => {
  return(err)
});

export {
  getContacts,
  getContact,
  postContact,
  editContacto,
  incrementInteractionsContact
}