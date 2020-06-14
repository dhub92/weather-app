import React from 'react';
import { grey } from '@material-ui/core/colors';
import { Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useLargeStyles = makeStyles({
    root: {
        fontSize: 40,
        color: grey[600],
    }
});

const useSmallStyles = makeStyles({
    root: {
        fontSize: 15,
        color: grey[600],
    }
});

const DayTimeText = ({children, isLarge = false}) =>{
    const largeClasses = useLargeStyles();
    const smallClasses = useSmallStyles()
    return <Typography className={isLarge ? largeClasses.root : smallClasses.root}>{children}</Typography>
}

DayTimeText.propTypes={
    children: PropTypes.node,
    isLarge: PropTypes.bool,
}

export default DayTimeText;