import React, { useState, useEffect, useMemo } from 'react';
import ChildHook from './ChildHook';
const MyHook = () => {
    const [name, setName] = useState('toan');
    const [age, setAge] = useState(0);
    useEffect(() => {
        console.log('Parent run');
    }, [])
    return (
        <div className="container mt-5">
            <h2>my age: {age}</h2>
            <ChildHook name={name}/>
            <div>
                <button className="btn btn-success" onClick={() => setAge(age +1)}>Increment Age</button>
                <button className="btn btn-primary" onClick={() => setName('Tuong')}>Change Name</button>
            </div>

        </div>
    );
};

export default MyHook;