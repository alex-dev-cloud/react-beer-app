import React from 'react';
import {observer} from 'mobx-react-lite';
import {useHistory, useLocation} from 'react-router-dom';
import {tabsList} from './tabsList';
import classes from './TabBar.module.scss';
import {BEERS_LIST} from "../../constants";
import SortingBar from "../SortingBar/SortingBar";

const TabBar = observer(() => {

    const history = useHistory();
    const location = useLocation();

    const getTabClass = ({path}) => {

        const pathArr = location.pathname.split('/');

        if ((pathArr.length === 2) && path === '/') {
            return `${classes.tabItem} ${classes.active}`;
        }

        if (pathArr.includes(path)) {
             return `${classes.tabItem} ${classes.active}`;
        }

        return `${classes.tabItem}`;
    };

    const tabClickHandler = (tab) => {
        history.push(BEERS_LIST + '/' + tab.path);
    };

    return (
        <div className={classes.tabBarContainer}>
            <div className="container d-flex">
                {
                    tabsList.map(tab =>
                        <div
                            key={tab.path}
                            className={getTabClass(tab)}
                            onClick={() => tabClickHandler(tab)}>
                            {tab.title}
                        </div>
                    )
                }
                <SortingBar/>
            </div>
        </div>
    );
});

export default TabBar;