import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Context} from '../../index';
import {observer} from "mobx-react-lite";

const BeerPageHeader = observer(() => {

    const {beerStore} = useContext(Context);
    const history = useHistory();

    return (
        <header className="header d-flex f-center">
            <div className="wrapper">
                <div
                    className="btn"
                    style={{float: 'left', marginLeft: '50px', width: '80px'}}
                    onClick={() => history.goBack()}
                >
                    Go back
                </div>
                <h1>{beerStore.beer.name}</h1>
            </div>
        </header>
    );
});

export default BeerPageHeader;