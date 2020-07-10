import React from 'react';

import { CounterActionCreator, CounterThunkActionCreator } from './actionCreators';
import styles from './Counter.module.css';

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
    <button type="button" className={styles.btn} onClick={onIncrement}>+</button>
    <button type="button" className={styles.btn} onClick={onDecrement}>-</button>
    <button type="button" className={`${styles.btn} ${styles.hidden}`} onClick={onIncrementIfOdd}>Increment if odd</button>
    <button type="button" className={`${styles.btn} ${styles.hidden}`} onClick={onIncrementAsync}>Increment async</button>
    <button type="button" className={`${styles.btn} ${styles.hidden}`} onClick={onIncrementThunk}>Increment thunk</button>
    <button type="button" className={styles.btn} onClick={onIncrementEpic}>Epic (Both)</button>
  </p>
);

export default Counter;
