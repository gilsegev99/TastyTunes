"use server"

import { setRefreshToken, setToken, getToken } from '@/app/lib/auth'
import { NextResponse } from 'next/server'

const DJANGO_API_LOGIN_URL = "http://127.0.0.1:8000/api/token/pair"

export async function POST(request) {
    const requestData = await request.json()
    const jsonData = JSON.stringify(requestData)
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }
    const response = await fetch(DJANGO_API_LOGIN_URL, requestOptions)
    const responseData = await response.json()
    if (response.ok) {
        console.log("logged in")
        const {access, refresh} = responseData
        setToken(access) 
        setRefreshToken(refresh)
        const mytoekn = await getToken()
        console.log("THis token was just created:", mytoekn)
        return NextResponse.json({"loggedIn": true}, {status: 200})

    }   

    return NextResponse.json({"loggedIn": false, responseData}, {status: 200})
}