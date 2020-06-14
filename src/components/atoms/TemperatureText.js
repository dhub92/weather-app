import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useLargeStyles = makeStyles({
    root: {
        fontWeight:100,
        fontSize: 100,
        color: grey[800],
    }
});

const useSmallStyles = makeStyles({
    root: {
        fontSize: 15,
        color: grey[600],
    }
});
const TemperatureText = ({isLarge, children}) => {
const largeClasses = useLargeStyles();
const smallClasses = useSmallStyles()

return <Typography className={isLarge ? largeClasses.root: smallClasses.root}>{children}</Typography>
}
export default TemperatureText;