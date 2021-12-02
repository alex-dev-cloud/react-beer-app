import {makeAutoObservable} from 'mobx';

export class BeerStore {

    constructor() {
        this._beers  = [];
        this._isLoading = false;
        this._beer = {};
        makeAutoObservable(this);
    }

    setBeers(beers) {
        this._beers = beers;
    }

    get beers() {
        return this._beers;
    }

    setBeer(beer) {
        this._beer = beer;
    }

    get beer() {
        return this._beer;
    }

    setIsLoading(bool) {
        this._isLoading = bool;
    }

    get isLoading() {
        return this._isLoading;
    }
}