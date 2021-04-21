import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {

    const [state, dispatch]  = useReducer(reducer, initialState);

    return (
    <>
        <div>
                <h4>{state}</h4>
                <h2 className='btnStylePosition'>
                    <button onClick={() => dispatch({type: "INCREMENT"})}> Increment </button>    
                    <button onClick={() => dispatch({type: "DECREMENT"})}> Decrement </button>   
                </h2>
                 
        </div>
    </>
        
   )
}
export default UseReducer;
