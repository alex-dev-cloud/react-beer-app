import React, {useContext} from 'react';
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import CartItem from "./CartItem/CartItem";

const Tabs = observer(() => {

    const {beerStore} = useContext(Context);

    return (
        <div className="itemContainer">
            {
                beerStore.beers.map(beer =>
                    <CartItem key={beer.id} beer={beer}/>
                )
            }
        </div>
    );
});

export default Tabs;