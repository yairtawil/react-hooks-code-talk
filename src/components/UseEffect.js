/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    circles: {
        display: 'flex',
        width: 500,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    circle: {
        cursor: 'pointer',
        margin: 20,
        width: 100,
        height: 100,
        border: '1px solid',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleHighlight: {
        boxShadow: '0 0 10px 2px #3f51b5',
    },
}));

export default function UseEffect() {
    const classes = useStyles();

    const COLORS = useMemo(() => [
        'red',
        'green',
        'gold',
        'orange',
        'pink',
    ], []);

    const [element, setElement] = useState(null);
    const [mousedown, setMousedown] = useState(0);
    const [mousemove, setMousemove] = useState(0);

    useEffect(() => {
        if (element) {
            const onMouseMove = () => setMousemove(mousedown => mousedown + 1);
            const onMouseDown = () => setMousedown(mousedown => mousedown + 1);

            element.addEventListener('mousemove', onMouseMove);
            element.addEventListener('mousedown', onMouseDown);

            return () => {
                // old element going to be replaced!!!!!!!!!!!!!!!
                element.removeEventListener('mousemove', onMouseMove);
                element.removeEventListener('mousedown', onMouseDown);
                setMousedown(0);
                setMousemove(0);
            };
        }
    }, [element, COLORS]);

    const onClickSquare = useCallback((e) => {
        setElement(e.currentTarget);
    }, []);

    const onClear = useCallback(() => {
        setElement(null);
    }, []);

    return (
        <div className={classes.root}>
            <div className={classes.circles}>
                <div
                    className={classNames(classes.circle, { [classes.circleHighlight]: !element })}
                    onClick={onClear} > OFF </div>
                {
                    COLORS.map((color, index) => {
                        const ref = useRef();

                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={classNames(classes.circle, { [classes.circleHighlight]: ref.current === element })}
                                style={{ background: color }}
                                onClick={onClickSquare} />

                        );
                    })
                }

            </div>

            <div>
                <p>
                    mousemove: {mousemove}
                </p>

                <p>
                    mousedown: {mousedown}
                </p>
            </div>
        </div>
    );
}