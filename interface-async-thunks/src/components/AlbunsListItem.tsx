import { FC } from "react";
import { User } from "./User";

interface AlbunsListItemInt {
    user: User;
}

const AlbunsList: FC<AlbunsListItemInt> = () => {
    return (
        <>
            <div>Albums list item</div>
        </>
    );
};

export default AlbunsList;
