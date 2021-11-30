import {makeAutoObservable} from 'mobx';

export class BeerStore {

    constructor() {
        this._beers  = [];
        this._isLoading = false;
        makeAutoObservable(this);
    }

    setBeers(beers) {
        this._beers = beers;
    }

    get beers() {
        return this._beers;
    }

    setIsLoading(bool) {
        this._isLoading = bool;
    }

    get isLoading() {
        return this._isLoading;
    }
}