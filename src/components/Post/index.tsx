import React from "react";
import { useDispatch } from "react-redux";
import { getComments } from "../../application/actions/usersAction";
import Comments from "../Comments";

interface IProps {
    post: any;
}

const Post = ({ post }: IProps) => {
    const dispatch = useDispatch();

    return (
        <div className="post-main-container">
            <div>{post.title}</div>
            <hr />
            <div>{post.body}</div>
            <div className="action-block">
                <button className="btn" onClick={() => dispatch(getComments(post.id))}>Show Comments</button>
            </div>

            <Comments post={post} />
        </div>
    );
};

export default Post;
