import React from 'react';
import Loadable from 'react-loadable';
const loadingComponent = ({ error, pastDelay }) => {
    if (error) {
        return <div>Error!</div>;
    } else if (pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
};
let config = [
    {
        path: '',
        exact: false,
        component: Loadable({
            loader: () => import('../components/nav'),
            loading: loadingComponent,
            delay: 300
        }),
    },
    {
        path: 'articles',
        exact: false,
        component: Loadable({
            loader: () => import('../pages/home/index/index'),
            loading: loadingComponent,
            delay: 300
        }),
    }
];

export default config;