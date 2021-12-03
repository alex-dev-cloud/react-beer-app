import {BEERS_LIST, SINGLE_BEER} from "./constants";
import BeerListPage from "../pages/BeerListPage";
import SingleBeerPage from "../pages/SingleBeerPage";

export const routes = [
    {
        path: BEERS_LIST + '/:food?',
        component: BeerListPage

    },
    {
        path: SINGLE_BEER + '/:id',
        component: SingleBeerPage
    }
];