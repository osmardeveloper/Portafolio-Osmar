import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset} from '../store/slices/counter.slice';

const Counters = () => {

  
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch();

  const incrementCounter = () => dispatch(increment())
  const decrementCounter = () => dispatch(decrement())
  const resetCounter = () => dispatch(reset())
  
  return (
    <div>
      <h2>Acerca de Mi</h2>
      <h2>{counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Counters