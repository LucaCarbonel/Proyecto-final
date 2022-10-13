import { generateAccessToken } from '../index.js';

const errorManageAuthorization = (err, reApiCall) => {
  if(err.response.status == 403) {
    console.log('403')
      generateAccessToken().then((res) => {
        console.log('403 2')

        localStorage.setItem('accessToken', res.data.token)
      reApiCall().then((response) => ({
        data: response.data,
        headers: response.headers,
      })).catch((err) => {
        console.log('403 3')
        throw new Error(err)
      })
    }).catch(() => {
      console.log('403 3')
      throw new Error(err)
    })
  } else if(err.response.status == 401) {
    console.log('401')
      throw new Error("Para efectuar esta accion se debe iniciar sesion")
  } else {
    console.log('vanilla')
    throw new Error(err)
  }
}

export { errorManageAuthorization }
