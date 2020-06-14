import React from 'react'
import { Typography, makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

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
const TemperatureText = ({isLarge=false, children}) => {
const largeClasses = useLargeStyles();
const smallClasses = useSmallStyles()

return <Typography className={isLarge ? largeClasses.root: smallClasses.root}>{children}</Typography>
}

TemperatureText.propTypes={
    isLarge: PropTypes.bool,
    children: PropTypes.node
}

export default TemperatureText;