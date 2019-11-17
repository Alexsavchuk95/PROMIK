import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Base from 'ContainersRoot/Base';
import NotFound from 'ContainersRoot/NotFound';
import Desktop from 'ContainersRoot/Desktop';
import Mobile from 'ContainersRoot/Mobile';

export const routesDesktop = [
    <Route path="/" component={Base}>
        <IndexRoute key={Math.random()} component={Desktop} />
    </Route>,
    <Route path="*" component={NotFound} />,
];

export const routesMobile = [
    <Route path="/" component={Base}>
        <IndexRoute key={Math.random()} component={Mobile} />
    </Route>,
];
