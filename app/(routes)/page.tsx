'use client'

import Image from 'next/image'
import {useGetAllMessagesQuery} from "@/api/messages-api";
import Button from "@/app/_components/Button";

export default function Home() {

    // al llamar el hook, se realiza la petición, esta se mantendra en cache, por lo que si la peticion es la misma, no se realizara de nuevo.
    const {data, isLoading, isSuccess, refetch} = useGetAllMessagesQuery()

    return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Button/>
            </main>
    )
}

