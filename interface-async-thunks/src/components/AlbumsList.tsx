import { FC } from "react";
import { User } from "./User";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import { Album } from "./Album";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

interface AlbumsListInt {
    user: User;
}

const AlbumsList: FC<AlbumsListInt> = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, result] = useAddAlbumMutation();

    let content: any;
    if (isLoading) {
        content = <Skeleton times={4} className="h-4 w-full" />;
    } else if (error) {
        content = <p>Couldn't fetch albums</p>;
    } else {
        content = (data as Album[]).map((album: Album) => (
            <ExpandablePanel key={album.id} header={album.title}>
                <div>List of photos in the album go here</div>
            </ExpandablePanel>
        ));
    }
    return (
        <>
            <div>Albums for {user.name}</div>
            <Button loading={isLoading} onClick={() => addAlbum(user)}>
                Add Album
            </Button>
            {content}
        </>
    );
};

export default AlbumsList;
