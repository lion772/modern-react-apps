import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

const UsersList: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch<any>(fetchUsers());
    }, [dispatch]);

    return <h1>Users List</h1>;
};

export default UsersList;
