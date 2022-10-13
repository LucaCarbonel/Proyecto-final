const getTokens = (token) => {
 return localStorage.getItem(token)
}

export const accessToken = getTokens("accessToken")
export const refreshToken = getTokens("refreshToken")