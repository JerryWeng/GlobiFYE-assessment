import React, { useEffect, useState } from 'react'

function Counter(){
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    useEffect(()=>{ // useEffect example use case for the conceptual question
        console.log("the count number: ", count)
    }, [count])

    return(
        <div className="counter">
            <h3>count: {count}</h3>
            <div className='buttons'>
                <button onClick={increment}>↑</button>
                <button onClick={decrement}>↓</button>
            </div>
        </div>
    )
}

export default Counter