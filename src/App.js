import React from 'react';
import AppTabs from './components/AppTabs';
import AppContent from './components/AppContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
}));

function App() {
    const classes = useStyles();
    const [tab, setTab] = React.useState(0);

    return (
        <div className={classes.root}>
            <AppTabs tab={tab} setTab={setTab} />
            <AppContent tab={tab} />
        </div>
    );
}

export default App;
