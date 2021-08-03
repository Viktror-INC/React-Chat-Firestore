import React, {useContext} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from 'firebase';

const Chatting = () => {
    const {auth, firestore} = useContext(Context); // firestore you can write quentions
    const [user] = useAuthState(auth);
    const [value, setValue] = React.useState();
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );// downloaded message or not

    const sentMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid, //id
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp() //time from server
        })

        setValue('');
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid container
                  justify={"center"}
                  style={{height: window.innerHeight - 100, marginTop: "50px",}}>
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto', borderRadius: "5%",}}>
                    {messages.map(message => {
                            return (
                                <div style={{
                                    marginTop: "20px",
                                    position: "relative",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    <Grid container style={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: user.uid === message.uid ? "flex-end" : "left",
                                        padding: user.uid === message.uid ? "0 10px 0 0" : "0 0 0 10px",
                                    }}>
                                        <Avatar src={message.photoURL}/>
                                        <div>{message.displayName}</div>
                                        <div style={{
                                            marginBottom: "1%",
                                            border: user.uid === message.uid ? "1px solid lightgrey" : "2px solid lightblue",
                                            borderRadius: "10px",
                                            padding: "0 2%",
                                            maxWidth:"fit-content",
                                        }}>{message.text}</div>
                                    </Grid>
                                </div>
                            )
                        }
                    )}
                </div>
                <Grid container direction={"column"} alignItems={"flex-end"} style={{width: '80%', marginTop: '20px', borderRadius: "5%",}}>
                    <TextField fullWidth rowsMax={2} variant={"outlined"} value={value}
                               onChange={(e) => setValue(e.target.value)}/>
                    <Button onClick={sentMessage} style={{marginTop: '20px', borderRadius: "5%",}} variant={"outlined"}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chatting;