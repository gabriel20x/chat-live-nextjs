// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { NEXT_PUBLIC_API_URL } = process.env
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: `userApi`,
    // TODO: Add Preheaders for authentication.
    baseQuery: fetchBaseQuery({ baseUrl: `${NEXT_PUBLIC_API_URL}/users` }),
    endpoints: (builder) => ({
        // Endpoints

        //  TODO: Define the getAllUsers query

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = userApi