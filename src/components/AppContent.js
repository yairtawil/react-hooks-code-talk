import React from 'react';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseYair from './UseYair';
import UseContext from './UseContext';

export default function AppContent({ tab }) {
    switch (tab) {
        case 0:
            return <UseState />;
        case 1:
            return <UseEffect />;
        case 2:
            return <UseRef />;
        case 3:
            return <UseMemo />;
        case 4:
            return <UseReducer />;
        case 5:
            return <UseContext />;
        case 6:
            return <UseYair />;
        default:
            return null;
    }
}