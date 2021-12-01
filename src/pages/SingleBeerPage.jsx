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
            <header className="header">
                <h1>{beer.name}</h1>
            </header>
            <div className="container d-flex">
                <div className="imageContainer">
                    <img src={beer.image_url ?? fallBackImg} alt={beer.name}/>
                </div>
                <div className="infoContainer">
                    <h2>Alcohol By Volume: {beer.abv}%</h2>
                    <p className="tagline">{beer.tagline}</p>
                    <p>{beer.description}</p>
                    <h3>This beer pair with:</h3>
                    <ol>
                        {
                            beer.food_pairing?.map(food =>
                                <li>{food}</li>
                            )
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
});

export default SingleBeerPage;