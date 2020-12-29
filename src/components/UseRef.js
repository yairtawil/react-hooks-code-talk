import React, { useCallback, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        margin: 5,
    },
}));

export default function UseState() {
    const classes = useStyles();
    const conutRef = useRef(0);
    const [count, setCount] = useState(0);

    const updateTextRef = useCallback(() => {
        conutRef.current = conutRef.current + 1;
        console.log('conutRef.current?', conutRef.current)
    }, [conutRef]);

    useEffect(() => {
        console.log('effect via conutRef');
    }, [conutRef]);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Button className={classes.button} variant={'contained'} color={'primary'}
                        onClick={updateTextRef}>Update Ref</Button>

                <Button className={classes.button} variant={'contained'} color={'secondary'}
                        onClick={() => setCount(count => count + 1)}>
                    Update State
                </Button>
            </div>
            ref result: {conutRef.current}
            state result: {count}
        </div>
    );
}