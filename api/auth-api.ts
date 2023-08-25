// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ILogin, LoginResponse} from "@/types/Auth";

const { NEXT_PUBLIC_API_URL } = process.env
// Define a service using a base URL and expected endpoints

export const authApi = createApi({
    reducerPath: `authApi`,
    baseQuery: fetchBaseQuery({ baseUrl: `${NEXT_PUBLIC_API_URL}/auth` }),
    endpoints: (builder) => ({
        // Endpoints
        // TODO: Add Login mutation
        login: builder.mutation<LoginResponse,ILogin>({
            query: (loginData) => ({
                url: `/login`,
                method: 'POST',
                body: loginData,
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// TODO: Export all hooks
export const { useLoginMutation } = authApi