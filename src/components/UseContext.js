import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShimiContext from '../ShimiContext';
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
        width: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}));

export default function UseContext() {
    const classes = useStyles();
    const contextValue = useContext(ShimiContext);

    return (
        <div className={classes.root}>
            <Typography variant={'h4'}>{JSON.stringify(contextValue)}</Typography>

            <ShimiContext.Provider value={'Super Shimon Shvalb 😎 !'}>
                <GrandFather />
            </ShimiContext.Provider>
        </div>
    )
}

function GrandFather() {
    return (<Father />)
}

function Father() {
    return (<Child />)
}

function Child() {
    const classes = useStyles();
    //without props!
    const contextValue = useContext(ShimiContext);

    return (
        <div className={classes.root}>
            <Typography variant={'h4'}>{JSON.stringify(contextValue)}</Typography>
        </div>
    );
}
