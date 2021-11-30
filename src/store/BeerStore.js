import {makeAutoObservable} from 'mobx';

export class BeerStore {

    constructor() {
        this._beers  = [];
        makeAutoObservable(this);
    }

    setBeers(beers) {
        this._beers = beers;
    }

    get beers() {
        return this._beers;
    }
}