import { FC } from "react";
import { User } from "./User";
import AlbunsListItem from "./AlbunsListItem";
import { useFetchAlbumsQuery } from "../store";

interface AlbunsListInt {
    user: User;
}

const AlbunsList: FC<AlbunsListInt> = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    console.log(data, error, isLoading);
    return (
        <>
            <div>Albums from {user.name}:</div>
            <AlbunsListItem user={user} />
        </>
    );
};

export default AlbunsList;
