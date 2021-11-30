import React, {useEffect, useContext} from 'react';
import {BeerApi} from '../http/BeerApi';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import TabBar from '../components/TabBar/TabBar';
import CartItem from "../components/CartItem/CartItem";
import {useParams} from 'react-router-dom';
import SortingBar from "../components/SortingBar/SortingBar";

const BeerListPage = observer(() => {

    const {beerStore} = useContext(Context);
    const {food} = useParams();

    useEffect(() => {
        BeerApi.fetchAllBeers(food).then(beers => {
            beerStore.setBeers(beers);
        })
    }, [food]);

    return (
        <div>
            <h1>Beer list page</h1>
            <SortingBar/>
            <TabBar/>
            <div className="itemContainer">
                {
                    beerStore.beers.map(beer =>
                        <CartItem className="item" key={beer.id} beer={beer}/>
                    )
                }
            </div>
        </div>
    );
});

export default BeerListPage;