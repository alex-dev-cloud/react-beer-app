import React from 'react';
import {useHistory} from 'react-router-dom';
import {SINGLE_BEER} from '../../utils/constants';
import classes from './CartItem.module.scss';
import fallbackImg from '../../assets/no_photo_beer.png'

const CartItem = ({beer}) => {

    const history = useHistory();

    return (
        <div className={classes.cart} onClick={() => history.push(SINGLE_BEER + '/' + beer.id)}>
            <p className={classes.beerName}>{beer.name}</p>
            <div className={classes.contentContainer}>
                <div className={classes.cartImgContainer}>
                    <img src={beer.image_url ?? fallbackImg} alt={beer.name}/>
                </div>
                <p className={classes.abvInfo}>abv {beer.abv} %</p>
            </div>
        </div>
    );
};

export default CartItem;