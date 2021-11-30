import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {routes} from '../routes'
import {BEERS_LIST} from "../constants";

const AppRouter = () => {

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