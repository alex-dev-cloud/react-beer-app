import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BeerStore} from "./store/BeerStore";

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        beerStore: new BeerStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
