import React, {useEffect, useContext} from 'react';
import {BeerApi} from '../http/BeerApi';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import Tabs from '../components/Tabs';

const BeerListPage = observer(() => {

    const {beerStore} = useContext(Context);

    useEffect(() => {
        BeerApi.fetchAllBeers(beerStore.selectedTab).then(beers => {
            beerStore.setBeers(beers);
        })
    }, []);

    return (
        <div>
            <h1>Beer list page</h1>
            <Tabs beerItems={beerStore.beers}/>
        </div>
    );
});

export default BeerListPage;