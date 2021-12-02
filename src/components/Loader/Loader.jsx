import React, {useRef, useContext, useEffect} from 'react';
import LoadingTopBar from 'react-top-loading-bar';
import {Context} from '../../index';
import {observer} from "mobx-react-lite";

const Loader = observer(() => {

    const ref = useRef(null);
    const {beerStore} = useContext(Context);

    useEffect(() => {
        if (beerStore.isLoading) {
            return ref.current.continuousStart();
        }
        return ref.current.complete();
    }, [beerStore.isLoading]);

    return (
        <LoadingTopBar color="#000" ref={ref}/>
    );
});

export default Loader;