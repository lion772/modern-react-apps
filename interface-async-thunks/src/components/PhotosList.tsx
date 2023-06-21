import { FC } from "react";
import { Album } from "./Album";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";
import { Photo } from "./Photo";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";

interface PhotosListInt {
    album: Album;
}
const PhotosList: FC<PhotosListInt> = ({ album }) => {
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [addPhoto, result] = useAddPhotoMutation();

    let content: any = <></>;
    if (isFetching) {
        content = <Skeleton times={4} className="h-8 w-8" />;
    } else if (error) {
        content = <p>Couldn't fetch photos related to this album</p>;
    } else {
        content = (data as Photo[]).map((photo: Photo) => (
            <PhotosListItem key={photo.id} photo={photo} />
        ));
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button
                    loading={result.isLoading}
                    onClick={() => addPhoto(album)}
                >
                    + Add Photo
                </Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {content}
            </div>
        </div>
    );
};

export default PhotosList;
