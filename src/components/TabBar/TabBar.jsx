import React, {useContext} from 'react';
import {Context} from '../../index';
import {observer} from 'mobx-react-lite';
import {useHistory} from 'react-router-dom';
import {tabsList} from './tabsList';
import classes from './TabBar.module.scss';
import {BEERS_LIST} from "../../constants";

const TabBar = observer(() => {

    const {beerStore} = useContext(Context);
    const history = useHistory();

    return (
        <div className={classes.tabBarContainer}>
            {
                tabsList.map(tab =>
                    <div className={classes.tabItem} onClick={() => history.push(BEERS_LIST + '/' + tab.path)}>{tab.title}</div>
                )
            }
        </div>
    );
});

export default TabBar;