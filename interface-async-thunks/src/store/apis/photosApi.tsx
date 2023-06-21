import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
            invalidatesTags: (result: Photo[], error: any, album: Album) => {
                return [{ type: "PhotosAlbums", id: album.id }];
            },
            query: (album: { id: string }) => ({
                url: "/photos",
                method: "POST",
                body: {
                    albumId: album.id,
                    url: "https://images.unsplash.com/photo-1682687982423-295485af248a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
                },
            }),
        }),
        removePhoto: builder.mutation({
            invalidatesTags: (result: Photo[], error: any, photo: Photo) => {
                return [{ type: "Photo", id: photo.id }];
            },
            query: (photo: { id: string }) => ({
                url: `/photos/${photo.id}`,
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
