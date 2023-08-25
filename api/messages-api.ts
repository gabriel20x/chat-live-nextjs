// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IMessage from "@/types/Message";
import {Manager} from "socket.io-client";
import {ChatEvents} from "@/types/Chat";
import {getAccessToken} from "@/lib/auth-token-cookies/authTokenCookies";

const { NEXT_PUBLIC_API_URL } = process.env


// Definimos el socket
const socketManager = new Manager(NEXT_PUBLIC_API_URL as string);

// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
    reducerPath: `messageApi`,
    baseQuery: fetchBaseQuery({
        baseUrl: `${NEXT_PUBLIC_API_URL}/messages`,
        prepareHeaders: async (headers) => {
            const USER_TOKEN = getAccessToken();
            if (USER_TOKEN) {
                headers.set('Authorization', `Bearer ${USER_TOKEN}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Endpoints
        getAllMessages: builder.query<IMessage[], void>({
            query: () => ``, // Ya que nuestra petición es a la ruta base
            // onCacheEntryAdded es el metodo que nos permitirá actualizar los mensajes en el momento en que
            async onCacheEntryAdded(
                arg,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            ) {
                try {
                    await cacheDataLoaded;
                    // the /chat-messages endpoint responded already

                    // Definimos el socket
                    const socket = socketManager.socket('/', { auth: {
                            Authorization: getAccessToken()
                        } });

                    socket.on(ChatEvents.newMessage, (message: IMessage) => {
                        updateCachedData((draft) => {
                            draft.push(message);
                        });
                    });

                    await cacheEntryRemoved;

                    socket.off(ChatEvents.newMessage);
                } catch {
                    // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                    // in which case `cacheDataLoaded` will throw
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved;
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                // ws.close();
            },
        }),
        getConnectedUsers: builder.query<string[], void>({
            queryFn: () => ({ data: [] }), // Streaming data with no initial request
            // onCacheEntryAdded es el metodo que nos permitirá actualizar los mensajes en el momento en que
            async onCacheEntryAdded(
                arg,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            ) {
                try {
                    await cacheDataLoaded;

                    // Definimos el socket
                    const socket = socketManager.socket('/', { auth: {
                            Authorization: getAccessToken()
                        } });

                    socket.on(ChatEvents.usersOnline, (Ids: string[]) => {
                        updateCachedData((draft) => {
                            draft.push(...Ids);
                        });
                    });

                    socket.on(ChatEvents.connection, (id:string) => {
                        updateCachedData((draft) => {
                            draft.push(id);
                        });
                    });

                    socket.on(ChatEvents.desconnection, (id:string) => {
                        updateCachedData((draft) => {
                            const index = draft.findIndex((draftId) => id === draftId)
                            draft.splice(index,1);
                        });
                    });

                    await cacheEntryRemoved;

                    socket.off(ChatEvents.usersOnline);
                    socket.off(ChatEvents.connection);
                    socket.off(ChatEvents.desconnection);
                } catch (error) {
                    // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                    // in which case `cacheDataLoaded` will throw
                    console.log(error)
                }
                // cacheEntryRemoved will resolve when the cache subscription is no longer active
                await cacheEntryRemoved;
                // perform cleanup steps once the `cacheEntryRemoved` promise resolves
                // ws.close();
            },
        }),

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMessagesQuery, useGetConnectedUsersQuery } = messageApi