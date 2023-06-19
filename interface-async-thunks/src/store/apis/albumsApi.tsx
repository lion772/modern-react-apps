import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { Album } from "../../components/Album";
import { User } from "../../components/User";

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
    }),
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
