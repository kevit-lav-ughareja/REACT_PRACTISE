
import { useState } from 'react'
import './App.css'

function App() {
  const[count,setCount]=useState(0)
  
  
  
  const handleIncrement =()=>{
    setCount(count+1);
  }
  const handleDecrement =()=>{
    setCount(count-1);
  }
  const handleIncrementByFive =()=>{
    setCount(count+5);
  }

  return (
   <>
   <div className='btn-wrapper'>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleIncrementByFive}>Increment By 5</button>
    <p>Count:{count}</p>
   </div>
   </>
  )
}

export default App
