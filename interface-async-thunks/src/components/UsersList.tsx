import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { User } from "./User";
import useThunk from "../hook/useThunk";
import UsersListItem from "./UsersListItem";

const UsersList: FC = (): JSX.Element => {
    const [isLoadingUsers, errorUsers, fetchUsersList] = useThunk(fetchUsers);
    const [isCreatingUser, errorAddUser, addNewUser] = useThunk(addUser);

    const { data } = useSelector((state: any) => state.users);

    useEffect(() => {
        fetchUsersList();
    }, [fetchUsersList]);

    let content = <></>;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (errorUsers) {
        content = <div>{errorUsers}</div>;
    } else {
        content = data.map((user: User) => (
            <UsersListItem key={user.id} user={user} />
        ));
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={addNewUser}>
                    + Add User
                </Button>
                {errorAddUser && <p>{errorAddUser}</p>}
            </div>
            {content}
        </>
    );
};

export default UsersList;
