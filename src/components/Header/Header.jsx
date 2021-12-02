import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {BEERS_LIST, SINGLE_BEER} from "../../constants";
import ListPageHeader from "./ListPageHeader";
import BeerPageHeader from "./BeerPageHeader";

const Header = () => {

    return (
            <Switch>
                <Route path={BEERS_LIST}>
                    <ListPageHeader/>
                </Route>
                <Route path={SINGLE_BEER}>
                    <BeerPageHeader/>
                </Route>
                <Redirect to={BEERS_LIST}/>
            </Switch>
    );
};

export default Header;