import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./routes.js";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import '../index.css';

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    console.log(user);
    return user ? (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} extract={true}/>
                )}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        ) : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} extract={true}/>
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
        );
};

export default AppRouter;