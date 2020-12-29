import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        width: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    timer: {
        margin: 50
    }
}));

const useYair = (defaultSpeed, defaultTime) => {
    const [speed, setSpeed] = useState(defaultSpeed);
    const [time, setTime] = useState(defaultTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + speed);
        }, speed);

        return () => {
            clearInterval(interval);
        };
    }, [speed]);

    return [time, setSpeed];
};

export default function UseYair() {
    const classes = useStyles();

    const [tawilTime, setTawilSpeed] = useYair(1000, 0);
    const [riklinTime, setRiklinSpeed] = useYair(100, 0);

    return (
        <div className={classes.root}>
            <div className={classes.timer}>
                <Typography variant={'h4'}>Tawil: {tawilTime} </Typography>
                <Button variant={'contained'} color={'primary'} onClick={() => setTawilSpeed(100)}>Faster!</Button>
                <Button variant={'contained'} color={'secondary'} onClick={() => setTawilSpeed(1000)}>Slower!</Button>
            </div>
            <div>
                <Typography variant={'h4'}>Riklin: {riklinTime}</Typography>
                <Button variant={'contained'} color={'primary'} onClick={() => setRiklinSpeed(10)}>Faster!</Button>
                <Button variant={'contained'} color={'secondary'} onClick={() => setRiklinSpeed(1000)}>Slower!</Button>
            </div>
        </div>
    );
}