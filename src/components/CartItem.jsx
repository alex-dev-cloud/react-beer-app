import React from 'react';
import {useHistory} from 'react-router-dom';
import {SINGLE_BEER} from '../constants';

const CartItem = ({beer}) => {

    const history = useHistory();

    return (
        <div onClick={() => history.push(SINGLE_BEER + '/' + beer.id)}>
            <img src={beer.image_url} alt={beer.name}/>
            <p>{beer.name}</p>
        </div>
    );
};

export default CartItem;