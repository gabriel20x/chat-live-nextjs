// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IUser from "@/types/User";
import {getAccessToken} from "@/lib/auth-token-cookies/authTokenCookies";

const { NEXT_PUBLIC_API_URL } = process.env
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: `userApi`,
    baseQuery: fetchBaseQuery({
        baseUrl: `${NEXT_PUBLIC_API_URL}/users`,
        prepareHeaders: async (headers) => {
            const USER_TOKEN = getAccessToken();
            if (USER_TOKEN) {
                headers.set('Authorization', `Bearer ${USER_TOKEN}`);
            }
            return headers;
        }, }),
    endpoints: (builder) => ({
        // Endpoints
        getAllUsers: builder.query<Omit<IUser[], 'messages'>, void>({
            // note: an optional `queryFn` may be used in place of `query`
            query: () => ``, // La peticion es en users
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery } = userApi