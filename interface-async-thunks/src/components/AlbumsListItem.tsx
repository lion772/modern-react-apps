import { FC } from "react";
import { Album } from "./Album";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";

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
            List of photos in the album
        </ExpandablePanel>
    );
};

export default AlbumsListItem;
