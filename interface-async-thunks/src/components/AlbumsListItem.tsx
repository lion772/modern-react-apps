import { FC } from "react";
import { Album } from "./Album";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

interface AlbumsListItemInt {
    album: Album;
}

const AlbumsListItem: FC<AlbumsListItemInt> = ({ album }) => {
    const [removeAlbum, result] = useRemoveAlbumMutation();

    const header = (
        <>
            <Button
                className="mr-2"
                loading={result.isLoading}
                onClick={() => removeAlbum(album)}
            >
                <GoTrashcan />
            </Button>
            {album.title}
        </>
    );
    return (
        <ExpandablePanel header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    );
};

export default AlbumsListItem;
