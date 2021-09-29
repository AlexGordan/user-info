import { setCorrectModel } from "../../helpers/helpers";
import { userAPI } from "../api/usersAPI";

export const SET_USERS = (users: any) => {
    return { type: "SET_USERS", payload: users };
};

export const PUSH_USER = (user: any) => {
    return { type: "PUSH_USER", payload: user };
};

export const GET_USER = (id: number) => {
    return { type: "GET_USER", payload: id };
};

export const SET_USER = (user: any) => {
    return { type: "SET_USER", payload: user };
};

export const SET_POSTS = (posts: any) => {
    return { type: "SET_POSTS", payload: posts };
};

export const SET_COMMENTS = (data: any) => {
    return { type: "SET_COMMENTS", payload: data };
};

export const getUsers = () => async (dispatch: any) => {
    try {
        const response = await userAPI.getUsersAsync();
        if (response) {
            const users = response.map((m: any) => {
                return setCorrectModel(m);
            });
            dispatch(SET_USERS(users));
        } else {
            console.log("Something wrong!");
        }
    } catch (e) {
        console.log(e);
    }
};

export const getUser = (id: number) => async (dispatch: any) => {
    try {
        const response = await userAPI.getUserAsync(id);
        if (response) {
            const user = setCorrectModel(response);
            dispatch(SET_USER(user));
        } else {
            console.log("Something wrong!");
        }
    } catch (e) {
        console.log(e);
    }
};

export const getUserByEmail = (email: string) => async (dispatch: any) => {
    try {
        const response = await userAPI.findByEmail(email);
        if (response.length) {
            const user = setCorrectModel(response[0]);
            dispatch(SET_USER(user));
        } else {
            console.log("Something wrong!");
        }
    } catch (e) {
        console.log(e);
    }
};

export const getPosts = (userId: number) => async (dispatch: any) => {
    try {
        const posts = await userAPI.getPostsAsync(userId);
        if (posts.length) dispatch(SET_POSTS(posts));
        else console.log("No posts");
    } catch (e: any) {
        console.log(e);
    }
};

export const getComments = (postId: number) => async (dispatch: any) => {
    try {
        const comments = await userAPI.getCommentsAsync(postId);
        if (comments.length) dispatch(SET_COMMENTS({ comments: comments, postId: postId }));
        else console.log("Something went wrong");
    } catch (e) {
        console.log(e);
    }
};
