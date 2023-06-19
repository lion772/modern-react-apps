import { FC } from "react";
import { User } from "./User";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import { Album } from "./Album";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

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
            <AlbumsListItem key={album.id} album={album} />
        ));
    }
    return (
        <>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <Button
                    loading={result.isLoading}
                    onClick={() => addAlbum(user)}
                >
                    + Add Album
                </Button>
            </div>

            <div>{content}</div>
        </>
    );
};

export default AlbumsList;
