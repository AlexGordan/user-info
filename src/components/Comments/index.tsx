import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUserByEmail } from "../../application/actions/usersAction";
import Icon from "../../assets/Icon/Icon";
import "./styles.scss";

interface IProps {
    post: any;
}

const Comments = ({ post }: IProps) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { users, currentUser } = useSelector((state: any) => state.usersReducer);

    const goToProfile = (email: string) => {
        const user = users.find((f: any) => f.email === email);
        if (!user) {
            dispatch(getUserByEmail(email));
            history.push(`/users/${currentUser.id}`);
        } else {
            history.push(`/users/${user.id}`);
        }
    };

    return (
        <div className={classNames({ "main-comments-block": true, "full-comments-height": post.comments.length })}>
            <p className="bold">Comments</p>
            {post.comments.map((comment: any) => {
                return (
                    <div className="main-comment-container">
                        <div className="main-comment-info">
                            <div className="comment-avatar-block" onClick={() => goToProfile(comment.email)}>
                                <Icon size={30} icon={"user-filled"} color={"#000"} />
                                <div className="email-block">{comment.email}</div>
                            </div>
                            <div className="flex">{comment.name}</div>
                        </div>
                        <div>{comment.body}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Comments;
