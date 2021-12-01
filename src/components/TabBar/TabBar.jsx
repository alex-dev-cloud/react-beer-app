import React from 'react';
import {observer} from 'mobx-react-lite';
import {useHistory, useParams} from 'react-router-dom';
import {tabsList} from './tabsList';
import classes from './TabBar.module.scss';
import {BEERS_LIST} from "../../constants";
import SortingBar from "../SortingBar/SortingBar";

const TabBar = observer(() => {

    const history = useHistory();
    const params = useParams();
    const activeTab = params.food ?? '/';

    return (
        <div className={classes.tabBarContainer}>
            <div className="container d-flex">
                {
                    tabsList.map(tab =>
                        <div
                            key={tab.path}
                            className={tab.path === activeTab ? `${classes.tabItem} ${classes.active}` : `${classes.tabItem}`}
                            onClick={() => history.push(BEERS_LIST + '/' + tab.path)}>
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