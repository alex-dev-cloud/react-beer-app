import React, {useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {useParams} from 'react-router-dom';
import {BeerApi} from '../http/BeerApi';
import fallBackImg from '../assets/no_photo_beer.png'
import {Context} from "../index";
import {Loader} from "../components/Loader/Loader";
import ShowMoreText from "react-show-more-text";

const SingleBeerPage = observer(() => {

    const {id} = useParams();
    const {beerStore} = useContext(Context);
    let {beer} = beerStore;

    useEffect(() => {
        beerStore.setIsLoading(true);
        BeerApi.fetchSingleBeer(id).then(result => {
            beerStore.setBeer(result[0]);
            beerStore.setIsLoading(false);
        })
    }, []);

    return (

        <div>
            <div className="container d-flex f-center">
                <div className="imageContainer">
                    <img src={beer.image_url ?? fallBackImg} alt={beer.name}/>
                </div>
                <div className="infoContainer">
                    <h2>Alcohol By Volume: {beer.abv}%</h2>
                    <p className="tagline">{beer.tagline}</p>
                    <div className="description">
                        <ShowMoreText width={900}>{beer.description}</ShowMoreText>
                    </div>
                    <h3>This beer pair with:</h3>
                    <ol>
                        {
                            beer.food_pairing?.map((food, index) =>
                                <li key={index}>{food}</li>
                            )
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
});

export default SingleBeerPage;