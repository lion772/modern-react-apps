import { FC } from "react";
import { User } from "./User";

interface UsersListItemInt {
    user: User;
}
const UsersListItem: FC<UsersListItemInt> = ({ user }) => {
    return <>{user.name}</>;
};

export default UsersListItem;
