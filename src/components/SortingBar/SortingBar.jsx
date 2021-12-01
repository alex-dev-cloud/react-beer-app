import React, {useContext, useState} from 'react';
import classes from './SortingBar.module.scss';
import {Context} from '../../index';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';


const SortingBar = () => {

    const {beerStore} = useContext(Context);
    const [sortingType, setSortingType] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const sortingByName = () => {
        let sortedBeers = beerStore.beers.sort( (a, b) => a.name.localeCompare(b.name));
        sortedBeers = sortDirection === 'asc' ? sortedBeers : sortedBeers.reverse();
        setSortingType('name');
        const sort = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(sort);
        beerStore.setBeers(sortedBeers);
    };

    const sortingByAlcohol = () => {
        let sortedBeers = beerStore.beers.sort( (a, b) => a.abv - b.abv);
        sortedBeers = sortDirection === 'asc' ? sortedBeers : sortedBeers.reverse();
        setSortingType('alcohol');
        const sort = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(sort);
        beerStore.setBeers(sortedBeers);
    };

    const getSortIconClass = sorting => {
        if (sorting !== sortingType) {
            return faSort;
        }
        return sortDirection === 'asc' ? faSortUp : faSortDown;
    };

    return (
        <div className={classes.container}>
            <div onClick={sortingByName} className={sortingType === 'name' ? `${classes.item} + ${classes.active}` : classes.item}>
                <span className="btn-title">By name</span>
                <FontAwesomeIcon icon={getSortIconClass('name')}/>
            </div>
            <div onClick={sortingByAlcohol} className={sortingType === 'alcohol' ? `${classes.item} + ${classes.active}` : classes.item}>
                <span className="btn-title">By alcohol</span>
                <FontAwesomeIcon icon={getSortIconClass('alcohol')}/>
            </div>
        </div>
    );
};

export default SortingBar;