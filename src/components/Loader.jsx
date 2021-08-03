import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import "./Loader.css";

const Loader = () => {
    return (
        <Container>
            <Grid container style={{height:window.innerHeight - 50}} alignItems={"center"} justify={"center"}>
                <Grid container alignItems={"center"} direction={"column"}>
                    <div className="lds-ripple">
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;