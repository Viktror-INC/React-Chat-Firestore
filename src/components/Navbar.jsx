import React, {useContext} from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <AppBar style={{backgroundColor: "blue", justifyContent:"flex-end"}}>
            <Toolbar style={{justifyContent:"flex-end"}}>
                <div>
                    {user ?
                        <Button style={{flexDirection:"flex-end", backgroundColor:"white !important", borderRadius: "5px"}} onClick={() => auth.signOut()}  >Log out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}><Button style={{flexDirection:"flex-end", backgroundColor:"#F0FFFF", borderRadius: "5px"}} >Login</Button></NavLink>
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;