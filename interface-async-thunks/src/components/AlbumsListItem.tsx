import { FC } from "react";
import { User } from "./User";

interface AlbumsListItemInt {
    user: User;
}

const AlbumsList: FC<AlbumsListItemInt> = () => {
    return (
        <>
            <div>Albums list item</div>
        </>
    );
};

export default AlbumsList;
