import { apiConfig } from "../../config/apiConfig";
import instance from "./instance";

const userAPI = {
    getUsersAsync: () => {
        return instance.get(`${apiConfig.gateway}/users`).then(({ data }) => data);
    },
    getUserAsync: (id: number) => {
        return instance.get(`${apiConfig.gateway}/users/${id}`).then(({ data }) => data);
    },
    findByEmail: (email: string) => {
        return instance.get(`${apiConfig.gateway}/users`, { params: { email: email } }).then(({ data }) => data);
    },
    getPostsAsync: (userId: number) => {
        return instance.get(`${apiConfig.gateway}/posts`, { params: { userId: userId } }).then(({ data }) => data);
    },
    getCommentsAsync: (postId: number) => {
        return instance.get(`${apiConfig.gateway}/comments`, { params: { postId: postId } }).then(({ data }) => data);
    },
};

export { userAPI };
