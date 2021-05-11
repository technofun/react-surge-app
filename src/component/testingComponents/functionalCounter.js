import React, { useState } from 'react'

function FunctionalCounter(props) {
    const [counter, setCounter] = useState(0)
    const handleCounterPlus = ()=>{
        setCounter(prevCounter => prevCounter + 1)
    }
    const handleCounterMinus = ()=>{
        setCounter(prevCounter => prevCounter === 0 ? 0 : prevCounter - 1)
    }
    return (
        <>
            <h3>Parent Component is: {props.parentName}</h3>
            <h1>{counter}</h1>
            <button className="btn btn-outline-danger"
            onClick={handleCounterMinus}
            >- Decrease</button>
             <button className="btn btn-outline-success"
            onClick={handleCounterPlus}
            >+ Increase</button>
        </>
    )
}

export default FunctionalCounter
