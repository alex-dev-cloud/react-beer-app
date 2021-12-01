import React from 'react';
import {Switch, Redirect, Route, useLocation} from 'react-router-dom';
import {routes} from '../routes'
import {BEERS_LIST} from "../constants";

const AppRouter = () => {

    const location = useLocation();

    return (
        <Switch>
            {
                routes.map(({path, component}) =>
                    <Route key={path} path={path} component={component} exact/>
                )
            }
                <Redirect to={BEERS_LIST}/>
        </Switch>
    );
};

export default AppRouter;