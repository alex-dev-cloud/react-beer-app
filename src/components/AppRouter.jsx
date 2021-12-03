import React from 'react';
import {Switch, Redirect, Route, useLocation} from 'react-router-dom';
import {routes} from '../utils/routes'
import {BEERS_LIST} from "../utils/constants";
import {PAGE_TRANSITION} from "../utils/transitions";
import {useTransition, animated} from 'react-spring';
import Header from './Header/Header'

const AppRouter = () => {

    const location = useLocation();
    const transitions = useTransition(location, PAGE_TRANSITION);

    return (
        <>
            <Header/>
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
        </>
    )
};
export default AppRouter;