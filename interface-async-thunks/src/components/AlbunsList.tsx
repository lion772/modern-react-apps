import { FC } from "react";
import { User } from "./User";
import AlbunsListItem from "./AlbunsListItem";

interface AlbunsListInt {
    user: User;
}

const AlbunsList: FC<AlbunsListInt> = ({ user }) => {
    const AlbumsList: any[] = [];
    let content = AlbumsList.map((album) => (
        <AlbunsListItem key={album.key} user={user} />
    ));

    return (
        <>
            <div>Albums from {user.name}:</div>
            <AlbunsListItem user={user} />
        </>
    );
};

export default AlbunsList;
