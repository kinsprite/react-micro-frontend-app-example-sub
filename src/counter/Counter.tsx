import React from 'react';

import { CounterActionCreator, CounterThunkActionCreator } from './actionCreators';

interface CounterProps {
  counter: number,
  onIncrement: CounterActionCreator,
  onIncrementAsync: CounterActionCreator,
  onDecrement: CounterActionCreator,
  onIncrementIfOdd: CounterActionCreator,
  onIncrementThunk: CounterThunkActionCreator,
  onIncrementEpic: CounterActionCreator,
}

const Counter : React.FC<any> = ({
  counter, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd, onIncrementThunk, onIncrementEpic,
}: CounterProps) => (
  <p>
    Clicked:
    {' '}
    {counter}
    {' '}
    times
    <button type="button" onClick={onIncrement}>+</button>
    {' '}
    <button type="button" onClick={onDecrement}>-</button>
    {' '}
    <button type="button" onClick={onIncrementIfOdd}>Increment if odd</button>
    {' '}
    <button type="button" onClick={onIncrementAsync}>Increment async</button>
    <button type="button" onClick={onIncrementThunk}>Increment thunk</button>
    <button type="button" onClick={onIncrementEpic}>Increment Epic</button>
  </p>
);

export default Counter;
