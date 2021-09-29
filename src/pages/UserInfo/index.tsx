import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getPosts, getUser, GET_USER } from "../../application/actions/usersAction";
import Icon from "../../assets/Icon/Icon";
import Posts from "../../components/Posts";
import "./styles.scss";

const UserInfo = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { currentUser, users } = useSelector((state: any) => state.usersReducer);
    console.log(history);

    useEffect(() => {
        const pathname = history.location.pathname.split("/");
        const id = +pathname[pathname.length - 1];
        if (!users.length) dispatch(getUser(id));
        else dispatch(GET_USER(id));
    }, [history.location.pathname, users.length, dispatch]);

    return (
        <div className="user-info-container">
            <div className="user-info-block">
                <div className="user-image-block">
                    <Icon icon="user-filled" size={100} />
                </div>
                <div className="main-info-block">
                    <span>
                        {currentUser.firstName} {currentUser.lastName}
                    </span>
                </div>
                <div className="other-info-block margin">
                    <span> Website:</span> {currentUser.website}
                </div>
                <div className="other-info-block">
                    <span>Company:</span> {currentUser.companyName}
                </div>
                <div className="action-block">
                    <button
                        className="btn"
                        disabled={currentUser.isAdd}
                        onClick={() => dispatch(getPosts(currentUser.id))}
                    >
                        View Posts
                    </button>
                </div>
            </div>
            {!currentUser.isAdd ? <Posts user={currentUser} /> : null}
        </div>
    );
};

export default UserInfo;
