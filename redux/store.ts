import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import {messageApi} from "@/api/messages-api";
import {authApi} from "@/api/auth-api";
import {userApi} from "@/api/users-api";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        // TODO: add all the reducers example: [api.reducerPath]: api.reducer
        [messageApi.reducerPath]: messageApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        // TODO: add the middleware to concat all the reducers. example:  getDefaultMiddleware().concat(api_1.middleware,api_2.middleware)
        getDefaultMiddleware().concat(messageApi.middleware,authApi.middleware,userApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)