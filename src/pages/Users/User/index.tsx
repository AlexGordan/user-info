import React from "react";
import { useHistory } from "react-router";
import { IUser } from "../../../types/User";
import "./styles.scss";

interface IProps {
    user: IUser;
}

const User = ({ user }: IProps) => {
    const history = useHistory();

    const goToUser = () => {
        history.push(`/users/${user.id}`);
    };

    return (
        <div className="user-main-container" onClick={goToUser}>
            <div className="title-td id-td">{user.id}</div>
            <div className="title-td email-td">{user.email}</div>
            <div className="title-td">{user.firstName}</div>
            <div className="title-td">{user.lastName}</div>
            <div className="title-td">{user.website}</div>
            <div className="title-td">{user.companyName}</div>
        </div>
    );
};

export default User;
