import { FC } from "react";
import { Photo } from "./Photo";
import { useRemovePhotoMutation } from "../store";

interface PhotosListInt {
    photo: Photo;
}
const PhotosListItem: FC<PhotosListInt> = ({ photo }) => {
    console.log(photo);
    const [removePhoto, result] = useRemovePhotoMutation();
    console.log(result);
    const content = (
        <div>
            <img src={photo.url} alt={photo.id} />
            <button onClick={() => removePhoto(photo)}>Delete Photo</button>
        </div>
    );

    return <>{content}</>;
};

export default PhotosListItem;
