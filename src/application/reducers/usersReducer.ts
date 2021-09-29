import { IAction } from "../../types/Action";
import { IUsersState } from "../../types/UsersState";
const initialState = {
    users: [],
    currentUser: {
        id: 0,
        firstName: "",
        lastName: "",
        website: "",
        companyName: "",
        email: "",
        posts: [],
    },
} as IUsersState;

export const usersReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case "SET_USERS": {
            return {
                ...state,
                users: [...action.payload, ...state.users],
            };
        }

        case "PUSH_USER": {
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        }
        case "GET_USER": {
            const user = state.users.find((f: any) => f.id === action.payload);
            return {
                ...state,
                currentUser: user,
            };
        }

        case "SET_USER": {
            return {
                ...state,
                currentUser: action.payload,
            };
        }

        case "SET_POSTS": {
            let posts = action.payload;
            posts = posts.map((m: any) => {
                m.comments = [];
                return m;
            });
            return {
                ...state,
                currentUser: { ...state.currentUser, posts: posts },
            };
        }

        case "SET_COMMENTS": {
            const posts = [...state.currentUser.posts];
            const post = posts.find((f) => f.id === action.payload.postId);
            post.comments = action.payload.comments;
            return {
                ...state,
                currentUser: { ...state.currentUser, posts: posts },
            };
        }
        default:
            return state;
    }
};
