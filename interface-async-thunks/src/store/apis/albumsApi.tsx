import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints: (builder) => ({
        // Define your endpoints here
        fetchAlbums: builder.query({
            query: (user) => ({
                url: "/albums",
                params: { userId: user.id },
                method: "GET",
            }),
        }),
        // More endpoints...
    }),
});

export const { useFetchAlbumsQuery } = albumsApi;
