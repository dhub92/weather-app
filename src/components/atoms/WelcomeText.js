import React from 'react';
import { grey } from '@material-ui/core/colors';
import { Typography, makeStyles } from '@material-ui/core';

const WelcomeText = () =>{
    const titleStyle = makeStyles({
        root:{
            fontSize:50,
            fontWeight: 200,
            color:grey[800]
        }
    })();

    const subTitleStyle = makeStyles({
        root:{
            fontSize:30,
            fontWeight: 200,
            color:grey[700]
        }
    })();

    return(<>
        <Typography className={titleStyle.root}>Welcome to the weather app</Typography>
        <Typography className={subTitleStyle.root}>Select a city to show its weather</Typography>
    </>)
}

export default WelcomeText;