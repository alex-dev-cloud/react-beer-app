import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useParams} from 'react-router-dom';
import {BeerApi} from '../http/BeerApi';
import fallBackImg from '../assets/no_photo_beer.png'

const SingleBeerPage = observer(() => {

    const {id} = useParams();
    const [beer, setBeer] = useState({});

    useEffect(() => {
        BeerApi.fetchSingleBeer(id).then(result => {
            setBeer(result[0]);
        })
    }, []);

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