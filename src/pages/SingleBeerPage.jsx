import React, {useEffect, useState, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {useParams} from 'react-router-dom';
import {BeerApi} from '../http/BeerApi';
import fallBackImg from '../assets/no_photo_beer.png'
import {Context} from "../index";
import {Loader} from "../components/Loader/Loader";

const SingleBeerPage = observer(() => {

    const {id} = useParams();
    const {beerStore} = useContext(Context);
    const [beer, setBeer] = useState({});

    useEffect(() => {
        beerStore.setIsLoading(true);
        BeerApi.fetchSingleBeer(id).then(result => {
            setBeer(result[0]);
            beerStore.setIsLoading(false);
        })
    }, []);

    if (beerStore.isLoading) {
        return <Loader/>
    }

    return (
        <div>
            <h1>Single beer page</h1>
            <div>
                <img src={beer.image_url ?? fallBackImg} alt={beer.name}/>
                <h3>{beer.name}</h3>
                <hr/>
                <p>{beer.description}</p>
            </div>
        </div>
    );
});

export default SingleBeerPage;