import { FC } from "react";
import { Album } from "./Album";
import { useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";
import { Photo } from "./Photo";

interface PhotosListInt {
    album: Album;
}
const PhotosList: FC<PhotosListInt> = ({ album }) => {
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    console.log(data);

    let content: any = <></>;
    if (isFetching) {
        content = <Skeleton times={4} className="h-4 w-full"></Skeleton>;
    } else if (error) {
        content = <p>Couldn't fetch photos related to this album</p>;
    } else {
        content = (data as Photo[]).map((photo: Photo) => (
            <div key={photo.id}>
                <img src={photo.url} alt={photo.id} />
            </div>
        ));
    }
    return <>{content}</>;
};

export default PhotosList;
