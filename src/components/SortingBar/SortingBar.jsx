import React, {useContext, useState} from 'react';
import classes from './SortingBar.module.scss';
import {Context} from '../../index';


const SortingBar = () => {

    const {beerStore} = useContext(Context);
    const [sortingType, setSortingType] = useState(null);

    const sortingByName = () => {
        const sortedBeers = beerStore.beers.sort( (a, b) => a.name.localeCompare(b.name));
        setSortingType('name');
        beerStore.setBeers(sortedBeers);
    };

    const sortingByAlcohol = () => {
        const sortedBeers = beerStore.beers.sort( (a, b) => a.abv - b.abv);
        setSortingType('alcohol');
        beerStore.setBeers(sortedBeers);
    };

    return (
        <div className={classes.container}>
            <div onClick={sortingByName} className={sortingType === 'name' ? `${classes.item} + ${classes.active}` : classes.item}>
                By name
            </div>
            <div onClick={sortingByAlcohol} className={sortingType === 'alcohol' ? `${classes.item} + ${classes.active}` : classes.item}>
                By alcohol
            </div>
        </div>
    );
};

export default SortingBar;