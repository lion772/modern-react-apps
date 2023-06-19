import { FC } from "react";
import { User } from "./User";
import AlbunsListItem from "./AlbumsListItem";
import { useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import { Album } from "./Album";
import ExpandablePanel from "./ExpandablePanel";

interface AlbumsListInt {
    user: User;
}

const AlbumsList: FC<AlbumsListInt> = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);

    let content = <></>;
    if (isLoading) {
        content = <Skeleton times={4} className="h-4 w-full" />;
    } else if (error) {
        content = <p>Couldn't fetch albums</p>;
    } else {
        content = data.map((album: Album) => (
            <ExpandablePanel key={album.id} header={album.title}>
                <div>List of photos in the album go here</div>
            </ExpandablePanel>
        ));
    }
    return (
        <>
            <div>Albums for {user.name}</div>
            {content}
        </>
    );
};

export default AlbumsList;
