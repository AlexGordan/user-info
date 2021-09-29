import classNames from "classnames";
import React from "react";
import Post from "../Post";
import "./styles.scss";

interface IProps {
    user: any;
}

const Posts = ({ user }: IProps) => {
    return (
        <div className={classNames({ "posts-container": true, "full-height": user.posts.length })}>
            <p className="bold">Posts</p>
            {user.posts.length ? (
                user.posts.map((m: any) => {
                    return <Post key={m.id} post={m} />;
                })
            ) : (
                <div>No Posts</div>
            )}
        </div>
    );
};

export default Posts;
