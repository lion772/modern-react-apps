import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { User } from "./User";

const UsersList: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const {
        isLoading,
        data: usersList,
        error,
    } = useSelector((state: any) => state.users);

    useEffect(() => {
        dispatch<any>(fetchUsers());
    }, [dispatch]);

    const handleUserAdd = () => {
        dispatch<any>(addUser());
    };

    let result = <div></div>;
    if (isLoading) {
        result = <Skeleton times={6} className="h-10 w-full" />;
    }
    if (usersList && usersList.length > 0) {
        result = (
            <ul>
                {usersList.map((user: User) => (
                    <li key={user.id} className="mb-2 border rounded">
                        <p className="flex p-2 justify-between items-center cursor-pointer">
                            {user.name}
                        </p>
                    </li>
                ))}
            </ul>
        );
    }
    if (error) {
        result = <div>Something went wrong. Error fetching data.</div>;
    }

    return (
        <>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m2 text-xl">Users</h1>
                <Button onClick={handleUserAdd}>+ Add User</Button>
            </div>
            {result}
        </>
    );
};

export default UsersList;
