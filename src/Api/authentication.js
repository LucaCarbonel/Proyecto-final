import axios from './http';

const generateAccessToken = () => axios.post(
  `/users/token`,
  {
    token: localStorage.getItem('refreshToken')
  }
).then((res) => {
  localStorage.setItem("accessToken", res.data.accessToken)
})


export {
  generateAccessToken
}