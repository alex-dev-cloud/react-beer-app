import React, {useEffect, useContext} from 'react';
import {BeerApi} from '../http/BeerApi';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import TabBar from '../components/TabBar/TabBar';
import CartItem from "../components/CartItem/CartItem";
import {useParams} from 'react-router-dom';
import {Loader} from "../components/Loader/Loader";

const BeerListPage = observer(() => {

    const {beerStore} = useContext(Context);
    const {food} = useParams();

    useEffect(() => {
        beerStore.setIsLoading(true);
        BeerApi.fetchAllBeers(food).then(beers => {
            beerStore.setBeers(beers);
            beerStore.setIsLoading(false);
        })
    }, [food]);

    if (beerStore.isLoading) {
        return <Loader/>
    }

    return (
        <div>
            <header className="header">
                <h1>React beer app</h1>
                <TabBar/>
            </header>
            <div className="itemContainer container">
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