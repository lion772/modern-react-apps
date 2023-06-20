import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { User } from "../../components/User";
import { Album } from "../../components/Album";
import { Photo } from "../../components/Photo";

const photosApi = createApi({
    reducerPath: "photos",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
    endpoints: (builder: any) => ({
        // Define your endpoints here
        fetchPhotos: builder.query({
            providesTags: (result: Photo[], error: any, album: Album) => {
                const tags = result.map((photo: Photo) => ({
                    type: "Photo",
                    id: photo.id,
                }));
                tags.push({ type: "PhotosAlbums", id: album.id });
                return tags;
            },
            query: (album: { id: string }) => ({
                url: "/photos",
                params: { albumId: album.id },
                method: "GET",
            }),
        }),
        addPhoto: builder.mutation({
            invalidatesTags: (result: Photo[], error: any, album: Album) => [
                { type: "PhotosAlbums", id: album.id },
            ],
            query: (album: { id: string }) => ({
                url: "/photos",
                method: "POST",
                body: {
                    albumId: album.id,
                    url: faker.image.url(),
                },
            }),
        }),
        removePhoto: builder.mutation({
            invalidatesTags: (result: Photo[], error: any, photo: Photo) => {
                return [{ type: "Photo", id: photo.id }];
            },
            query: (album: { id: string }) => ({
                url: `/albums/${album.id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useFetchPhotosQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation,
} = photosApi;
export { photosApi };
