// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// TODO: Define the socket Manager

const { NEXT_PUBLIC_API_URL } = process.env
// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
    reducerPath: `messageApi`,
    // TODO: Add Preheaders for authentication.
    baseQuery: fetchBaseQuery({ baseUrl: `${NEXT_PUBLIC_API_URL}/messages` }),
    endpoints: (builder) => ({
        // Endpoints

        //     TODO: Add the getAllMessages query, with the socket io connection, (newMessage event)

        //     TODO: Add the getConnectedUsers query, with the socket io connection (connection, disconnection, usersOnline event)

        //     TODO: Add the sendMessage mutation, with the socket io connection (sendMessage event)

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// TODO: Export all the api's hooks
export const {  } = messageApi