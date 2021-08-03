import React from 'react';
import {Container} from "@material-ui/core";
import "./Loader.css";

const Loader = () => {
    return (
        <Container>
            <div  style={{height:window.innerHeight - 50, alignItems: "center", justifyContent:"center"}}>
                <div style={{alignItems:"center",}}>
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Loader;