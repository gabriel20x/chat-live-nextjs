import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        // TODO: add all the reducers example: [api.reducerPath]: api.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        // TODO: add the middleware to concat all the reducers. example:  getDefaultMiddleware().concat(api_1.middleware,api_2.middleware)
        getDefaultMiddleware().concat(),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)