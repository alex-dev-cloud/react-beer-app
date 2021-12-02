import React from 'react';
import {Switch, Redirect, Route, useLocation} from 'react-router-dom';
import {routes} from '../routes'
import {BEERS_LIST} from "../constants";
import {useTransition, animated} from 'react-spring';

const AppRouter = () => {

    const location = useLocation();
    const transitions = useTransition(location, {

        from: {
            opacity: 0,
            position: 'absolute',
            width: '100%'
        },

        enter: {
            opacity: 1,
            position: 'absolute',
            width: '100%'
        },

        leave: {
            opacity: 0,
            position: 'absolute',
            width: '100%'

        },
        config: {duration: 300}

    });

    return (
        <div style={{position: 'relative', width: '100%'}}>
            {
                transitions((props, item) => (
                    <animated.div style={props}>
                        <Switch location={item}>
                            {
                                routes.map(({path, component}) =>
                                    <Route key={path} path={path} component={component} exact/>
                                )
                            }
                            <Redirect to={BEERS_LIST}/>
                        </Switch>
                    </animated.div>
                ))
            }
        </div>
    )
};
export default AppRouter;