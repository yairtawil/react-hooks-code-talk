import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
        width: 200,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}));

export default function UseState() {
    const classes = useStyles();
    const [count, setCount] = useState(0);

    const increase = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrease = useCallback(() => {
        setCount(count - 1);
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Badge color="secondary" badgeContent={count}>
                    <MailIcon />
                </Badge>

                <ButtonGroup>
                    <Button onClick={decrease}>
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button onClick={increase}>
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}