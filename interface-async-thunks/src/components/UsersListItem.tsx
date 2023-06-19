import { FC } from "react";
import { User } from "./User";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "../hook/useThunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbunsList from "./AlbumsList";

interface UsersListItemInt {
    user: User;
}
const UsersListItem: FC<UsersListItemInt> = ({ user }) => {
    const [isRemovingUser, removeUserError, doRemoveUser] =
        useThunk(removeUser);

    let header = (
        <>
            <Button
                className="mr-3"
                loading={isRemovingUser}
                onClick={() => doRemoveUser(user)}
            >
                <GoTrashcan />
            </Button>
            {removeUserError && <p>Error deleting user</p>}
            {user.name}
        </>
    );
    return (
        <ExpandablePanel header={header}>
            <AlbunsList user={user} />
        </ExpandablePanel>
    );
};

export default UsersListItem;
