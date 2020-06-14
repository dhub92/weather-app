import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardContent, makeStyles } from '@material-ui/core';
import CitiesList from '../molecules/CitiesList';
import { grey } from '@material-ui/core/colors';
import WeatherMain from '../organisms/WeatherMain';
import {sortedCitiesList} from '../../utils/cities';

const WheaterPage = () =>{
    
    const mainContainer = makeStyles({
        root:{
            height: '100vh'
        }
    })();

    const weatherContainerStyle = makeStyles({
        root:{
            width: '100%',
            background: grey[200],
            padding: 10,
        }
    })();

    const cardStyle = makeStyles({
        root: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background:grey[300]
        }
    })();

    return(<>
        <Grid className={mainContainer.root} container >
            <Grid item xs={12} sm={12} md={2}>
                <CitiesList cities={sortedCitiesList}/>
            </Grid>
            <Grid className={weatherContainerStyle.root} container item md={10}>
                <Card className={cardStyle.root}>
                    <CardContent>
                        <WeatherMain/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>)
}
export default WheaterPage;