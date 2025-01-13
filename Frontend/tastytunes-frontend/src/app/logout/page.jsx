"use client"

import { useRouter } from "next/navigation"

const LOGOUT_URL = "/api/logout/"

export default function Page() {

    const router = useRouter()

    async function handleClick (event) {
        event.preventDefault() // prevents navigation to new page        
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: ""
        }
        const response = await fetch(LOGOUT_URL, requestOptions)
        const data = await response.json()
    
        if (response.ok) {
            console.log("logged out")
            router.replace("/login")
        }


    }
    

    return <div className="h-[95vh]">
        <div className='max-w-md mx-auto py-5'>        
            <h1>Are you sure you want to log out?</h1>
            <button className='bg-red-500 text-white hover:bg-red-300 px-3 py-2' 
            onClick={handleClick}>Yes, logout</button>
        </div>
    </div>
}