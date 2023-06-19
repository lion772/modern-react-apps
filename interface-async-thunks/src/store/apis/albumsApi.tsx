import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { User } from "../../components/User";
import { Album } from "../../components/Album";

const albumsApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints: (builder: any) => ({
        // Define your endpoints here
        fetchAlbums: builder.query({
            providesTags: (result: any, error: any, user: User) => [
                { type: "Album", id: user.id },
            ],
            query: (user: { id: string }) => ({
                url: "/albums",
                params: { userId: user.id },
                method: "GET",
            }),
        }),
        addAlbum: builder.mutation({
            invalidatesTags: (result: any, error: any, user: User) => [
                { type: "Album", id: user.id },
            ],
            query: (user: { id: string }) => ({
                url: "/albums",
                method: "POST",
                body: { userId: user.id, title: faker.commerce.productName() },
            }),
        }),
        removeAlbum: builder.mutation({
            
            query: (album: { id: string }) => ({
                url: `/albums/${album.id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
    useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
