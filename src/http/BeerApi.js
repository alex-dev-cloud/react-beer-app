import {$http} from './index';

export class BeerApi {

  // getting all beers https://api.punkapi.com/v2/beers
  static async fetchAllBeers(food) {
    const {data} = await $http.get('beers', {
      params: {food}
    });
    return data;
  }

  // getting one single beer by id
  static async fetchSingleBeer(id) {
    const {data} = await $http.get('beers/' + id);
    return data;
  }

}

