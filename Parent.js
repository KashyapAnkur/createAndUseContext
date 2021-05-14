import React,{useRef, useState,createContext} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

export const MyContext = createContext();

function Parent() {
    const [name, setName] = useState("Default name");
    const myref = useRef();
    const changeName = () => {
        setName(myref.current.value);
    }

    return (
        <>
            <input type="text" ref={myref} placeholder="Enter name" /><br />
            <button onClick={changeName}>Change Name</button><br /><br />
            <MyContext.Provider value={name}>
                Child 1: <Child1 /><br /><br />
                Child 2: <Child2 /><br /><br />
            </MyContext.Provider>
        </>
    )
}

export default Parent;