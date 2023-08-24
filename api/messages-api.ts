// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IMessage from "@/types/Message";

const { REACT_APP_API_URL } = process.env
// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
    reducerPath: `messageApi`,
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/messages` }),
    endpoints: (builder) => ({
        // Primer tipado es la respuesta de la petición, segundo tipado son los parametros del método
        getAllMessages: builder.query<IMessage[], void>({
            query: () => ``, // Por que se hace la peticion directo a .../messages
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMessagesQuery } = messageApi