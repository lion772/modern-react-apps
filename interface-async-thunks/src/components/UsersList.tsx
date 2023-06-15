import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

const UsersList: FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state: any) => state.users);

    useEffect(() => {
        dispatch<any>(fetchUsers());
    }, [dispatch]);

    let result = <div></div>;
    if (isLoading) {
        result = <div>Loading...</div>;
    }
    if (data && data.length > 0) {
        result = (
            <>
                <ul>
                    {data.map((item: any) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </>
        );
    }
    if (error) {
        result = <div>Something went wrong. Error fetching data.</div>;
    }

    return result;
};

export default UsersList;