import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function AppTabs({ tab, setTab }) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                className={classes.tabs}
                orientation="vertical"
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered>

                <Tab label="Use State" />
                <Tab label="Use Effect" />
                <Tab label="Use Ref" />
                <Tab label="Use Memo" />
                <Tab label="Use Reducer" />
                <Tab label="Use Context" />
                <Tab label="Use Yair" />
            </Tabs>
        </div>
    );
}