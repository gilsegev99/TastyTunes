"use client"
import Image from "next/image";
import useSWR from 'swr'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const USERS_API_URL = "/api/users/"

export default function Home() {
  // User for GET requests
  const {data, error, isLoading} = useSWR(USERS_API_URL, fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
 
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div>
        {JSON.stringify(data)}
      </div>
    </main>
  );
}
