import React,{useContext} from 'react';
import {MyContext} from './Parent';

function Child2() {
    const name = useContext(MyContext);
    return (
        <>
            {name}
        </>
    )
}

export default Child2;