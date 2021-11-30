import React from 'react';
import {useHistory} from 'react-router-dom';
import {SINGLE_BEER} from '../../constants';
import classes from './CartItem.module.scss';
import fallbackImg from '../../assets/no_photo_beer.png'

const CartItem = ({beer}) => {

    const history = useHistory();

    return (
        <div className={classes.cart} onClick={() => history.push(SINGLE_BEER + '/' + beer.id)}>
            <div className={classes["content-container"]}>
                <div className={classes["cart-img-container"]}>
                    <img src={beer.image_url ?? fallbackImg} alt={beer.name}/>
                </div>
            </div>
            <p>{beer.name}</p>
        </div>
    );
};

export default CartItem;