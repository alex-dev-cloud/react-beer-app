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
            translateX: '-1000px',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },

        enter: {
            opacity: 1,
            translateX: '0',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,

        },

        leave: {
            opacity: 0,
            translateX: '1000px',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        config: {duration: 300}

    });

    return (
        <div style={{position: 'relative', width: '100%'}}>
            {
                transitions((props, item) => (
                    <animated.div style={props}>
                        <div style={{position: 'absolute', width: '100%'}}>
                            <Switch location={item}>
                                {
                                    routes.map(({path, component}) =>
                                        <Route key={path} path={path} component={component} exact/>
                                    )
                                }
                                <Redirect to={BEERS_LIST}/>
                            </Switch>
                        </div>
                    </animated.div>
                ))
            }
        </div>
    )
};
export default AppRouter;