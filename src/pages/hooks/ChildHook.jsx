import React, { useEffect, useRef } from 'react';
const ChildHook = (props) => {
    const myRef = useRef();
    useEffect(() => {
        console.log('value', myRef.current.value)
        console.log('child run');
    }, [props.name])
    return (
        <div >
            <h2>my name: {props.name}</h2>
            <input ref={myRef} name="name" value="hello Then"/>

        </div>
    );
}

export default ChildHook;

// useCallback
// useRef