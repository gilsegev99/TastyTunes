const { cookies } = require("next/headers")

const TOKEN_AGE = 3600
const TOKEN_NAME = "auth-token"
const TOKEN_REFRESH_NAME = "auth-refresh-token"

export async function getToken(){
    // api requests
    const myCookie = await cookies()
    const myAuthToken = myCookie.get(TOKEN_NAME)
    return myAuthToken?.value
}

export async function getRefreshToken(){
    // api requests
    const myCookie = await cookies()
    const myAuthToken = myCookie.get(TOKEN_REFRESH_NAME)
    return myAuthToken?.value
}

export async function setToken(authToken){
    // login
    const myCookie = await cookies()
    const myAuthToken = myCookie.set({
        name: TOKEN_NAME,
        value: authToken,
        httpOnly: true, // limits client-side js
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: TOKEN_AGE,
    })
    return myAuthToken
}

export async function setRefreshToken(authRefreshToken){
    // login
    const myCookie = await cookies()
    const myAuthToken = myCookie.set({
        name: TOKEN_REFRESH_NAME,
        value: authRefreshToken,
        httpOnly: true, // limits client-side js
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: TOKEN_AGE,
    })
    return myAuthToken
}

export function deleteTokens(){
    // logout
    cookies().delete(TOKEN_REFRESH_NAME)
    return cookies().delete(TOKEN_NAME)

}