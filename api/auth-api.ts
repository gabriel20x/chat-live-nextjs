// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { NEXT_PUBLIC_API_URL } = process.env
// Define a service using a base URL and expected endpoints

export const authApi = createApi({
    reducerPath: `authApi`,
    baseQuery: fetchBaseQuery({ baseUrl: `${NEXT_PUBLIC_API_URL}/auth` }),
    endpoints: (builder) => ({
        // Endpoints
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = authApi