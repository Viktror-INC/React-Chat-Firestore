import React, {useContext} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
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
            <div 
                  justify={"center"}
                  style={{height: window.innerHeight - 100,margin: "0 auto", marginTop: "100px",}}>
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto', borderRadius: "5%", margin: "0 auto",}}>
                    {messages.map((message, index) => {
                            return (
                                <div key={index} style={{
                                    marginTop: "20px",
                                    position: "relative",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    <div  style={{
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
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <div  style={{margin: "0 auto",alignItems: "flex-end", display: "flex",flexDirection: "column", width: '80%', marginTop: '20px', borderRadius: "5%",}}>
                    <TextField  value={value} style ={{width:"100%", border:"2px solid black", borderRadius:"10px"}}
                               onChange={(e) => setValue(e.target.value)}/>
                    <Button onClick={sentMessage} style={{margin: "0 auto",marginTop: '20px', borderRadius: "5%",border:"2px solid black",}}  >Send</Button>
                </div>
            </div>
        </Container>
    );
};

export default Chatting;