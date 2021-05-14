import React,{useContext} from 'react';
import {MyContext} from './Parent';

function Child1() {
    const name = useContext(MyContext);
    return (
        <>
            {name}
        </>
    )
}

export default Child1;