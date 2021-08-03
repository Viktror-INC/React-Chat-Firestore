import {LOGIN_ROUTE,CHAT_ROUTE} from "../utils/consts";
import Login from "./Login";
import Chatting from "./Chatting";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE, //which path - /login
        Component: Login // which component open when this path
    }
];

export const privateRoutes = [
    {
        path: CHAT_ROUTE, //which path - /login
        Component: Chatting // which component open when this path
    }
];