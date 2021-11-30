import {makeAutoObservable} from 'mobx';

export class BeerStore {

    constructor() {
        this._beers  = [];
        this._selectedTab = 'pizza';
        makeAutoObservable(this);
    }

    setBeers(beers) {
        this._beers = beers;
    }

    get beers() {
        return this._beers;
    }

    setSelectedTab(tab) {
        this._selectedTab = tab;
    }

    get selectedTab() {
        return this._selectedTab;
    }
}