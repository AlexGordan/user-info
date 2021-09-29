import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../application/actions/usersAction";
import Icon from "../../assets/Icon/Icon";
import AddUserModal from "../../modals/AddUser/AddUserModal";
import "./styles.scss";
import User from "./User";

const Users = () => {
    const [openAddModal, setOpenAddModal] = useState(false);

    const dispatch = useDispatch();
    const { users } = useSelector((state: any) => state.usersReducer);

    useEffect(() => {
        if (!users.length) dispatch(getUsers());
    }, [dispatch, users.length]);

    return (
        <div className="users-container">
            <div className="users-data-container">
                <div className="titles">
                    <div className="title-td id-td">Id</div>
                    <div className="title-td email-td">Email</div>
                    <div className="title-td">First Name</div>
                    <div className="title-td">Last Name</div>
                    <div className="title-td">Website</div>
                    <div className="title-td">Company</div>
                </div>
                {users.map((user: any) => {
                    return <User key={user.id} user={user} />;
                })}
            </div>
            <div className="action-add-block">
                <Icon size={30} icon="add" onClick={() => setOpenAddModal(true)} />
            </div>
            <AddUserModal visible={openAddModal} onClose={() => setOpenAddModal(false)} />
        </div>
    );
};

export default Users;
