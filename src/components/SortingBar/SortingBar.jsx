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
        setSortingType('name');
        const descending = (a, b) => a.name.localeCompare(b.name);
        const ascending = (a, b) => b.name.localeCompare(a.name);
        sortDirection === 'asc' ? setSortDirection('desc') : setSortDirection('asc');
        const sorting = sortDirection === 'asc' ? ascending : descending;
        beerStore.beers.sort(sorting);
    };

    const sortingByAbv = () => {
        setSortingType('abv');
        const descending = (a, b) => a.abv - b.abv;
        const ascending = (a, b) => b.abv - a.abv;
        sortDirection === 'asc' ? setSortDirection('desc') : setSortDirection('asc');
        const sorting = sortDirection === 'asc' ? ascending : descending;
        beerStore.beers.sort(sorting);
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
            <div onClick={sortingByAbv} className={sortingType === 'abv' ? `${classes.item} + ${classes.active}` : classes.item}>
                <span className="btn-title">By alcohol</span>
                <FontAwesomeIcon icon={getSortIconClass('abv')}/>
            </div>
        </div>
    );
};

export default SortingBar;