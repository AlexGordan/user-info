import React from "react";
import { Switch, Route } from "react-router-dom";
import { IRoute } from "../types/Route";
import { routes } from "./routes";

const useRouter = () => {
    return (
        <>
            <Switch>
                {routes.map((route: IRoute) => {
                    return <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />;
                })}
            </Switch>
        </>
    );
};
export default useRouter;
