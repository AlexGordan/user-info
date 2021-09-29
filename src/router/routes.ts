import Home from "../pages/Home";
import UserInfo from "../pages/UserInfo";
import Users from "../pages/Users";
import { IRoute } from "../types/Route";

export const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/users",
        component: Users,
        exact: true,
    },
    {
        path: "/users/:id",
        component: UserInfo,
        exact: true,
    },
] as Array<IRoute>;
