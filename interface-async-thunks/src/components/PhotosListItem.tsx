import { FC } from "react";
import { Photo } from "./Photo";
import { useRemovePhotoMutation } from "../store";
import Skeleton from "./Skeleton";
import { GoTrashcan } from "react-icons/go";

interface PhotosListInt {
    photo: Photo;
}
const PhotosListItem: FC<PhotosListInt> = ({ photo }) => {
    const [removePhoto, result] = useRemovePhotoMutation();
    const loading = (
        <>
            {result.isLoading ? (
                <Skeleton times={1} className="h-5 w-full" />
            ) : (
                <img className="h-20 w-20" src={photo.url} alt="random pic" />
            )}
        </>
    );
    const content = (
        <div
            onClick={() => removePhoto(photo)}
            className="relative cursor-pointer m-2"
        >
            {loading}
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                <GoTrashcan className="text-3xl"></GoTrashcan>
            </div>
        </div>
    );

    return <>{content}</>;
};

export default PhotosListItem;
