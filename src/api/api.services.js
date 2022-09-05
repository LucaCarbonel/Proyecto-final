import axios from './http';

export const getUsers = () => axios.get(
  '/users',
).then((response) => ({
  data: response.data,
  headers: response.headers,
}));

export const createUser = ( 
  nombre,
  apellido,
  email,
  contraseña,
  img_perfil,
  lat,
  long
  ) => axios.post(
  '/users',
  {
    nombre,
    apellido,
    email,
    contraseña,
    img_perfil,
    ubicacion: {
      lat,
      long
    }
  }
).then((response) => ({
  data: response.data,
  headers: response.headers,
}));

// export const addTechnologies = (technologyId, id, level) => axios.post(
//   `/members/${id}/technologies`,
//   {
//     technologyId,
//     level,
//   },
// ).then((response) => ({
//   data: response.data,
//   headers: response.headers,
// }));

// export const editTechnologies = (firstName, lastName, dailyHours, technologies, id) => axios.put(
//   `/members/${id}`,
//   {
//     firstName,
//     lastName,
//     dailyHours,
//     technologies,
//   },
// ).then((response) => ({
//   data: response.data,
//   headers: response.headers,
// }));
