import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        margin: 50,
    },
}));

export default function UseMemo() {
    const classes = useStyles();
    const [counter, setCounter] = useState(0);
    const [multiCounter, setMultiCounter] = useState(0);

    const increase = useCallback(() => {
        setCounter(counter + 1);
    }, [counter]);

    useEffect(() => {
        setMultiCounter(counter * 2);
    }, [counter]);

    return (
        <div className={classes.root}>
            <Button
                className={classes.button}
                variant={'contained'}
                color={'primary'}
                onClick={increase}>Increase</Button>

            <Typography>Counter: {counter}</Typography>
            <Typography>Multi counter: {multiCounter}</Typography>


        </div>
    );
}