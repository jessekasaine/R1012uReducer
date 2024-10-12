import React, { useReducer } from 'react'

function CountBtn() {
    //start with initialStae = object
    //const reducer= (state, action)={switch}
    //const [state, dispatch] = useReducer(reducer, initialState)
    const initialState = { count: 0 }
    
    const reducer = (state, action) => {
        switch (action.type) {
            case "Increase":{
                return {count: state.count + 1}
            }
            case "Reset":{
                return {count:0}
            }
            case "Decrease":{
                return {count: state.count - 1}
            }
            
            default:{
                return state;
            }
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    
    const increamentBtn = () => {
        dispatch({type: "Increase"})
    }
    const resetBtn = () => {
        dispatch({type: "Reset"})
    }
    const decreamentBtn = () => {
        if (state.count>0) {
            dispatch({type: "Decrease"})
        }
    }

  return (
    <div className='flex flex-col items-center mt-3'>
          <p className='text-4xl'>{ state.count}</p>
          <div className="flex space-x-4 mt-3">
            <button onClick={increamentBtn} className='bg-white text-black py-1 px-2 rounded-lg'>Inccrease</button>
            <button onClick={resetBtn} className='bg-white text-black py-1 px-2 rounded-lg'>Reset</button>
            <button onClick={decreamentBtn} className='bg-white text-black py-1 px-2 rounded-lg'>Decrease</button>
          </div>
    </div>
  )
}

export default CountBtn
