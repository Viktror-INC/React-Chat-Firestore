import React, {useContext} from 'react';
import {Box, Button, Container} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase";

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => { //async function
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        console.log(user);
    }
    return (
        <Container>
            <div  style={{height:window.innerHeight - 50, position: "relative", display:"flex", alignItems:"center", justifyContent: "center"}}>
            <div style={{margin: "0 auto", position: "relative",width:400, background: "lightgray", alignItems:"center", textAlign: "center"}}>
                <Box p={5}>
                    <Button onClick={login}>Log in with Google</Button>
                </Box>
            </div>
            </div>
        </Container>
    );
};

export default Login;