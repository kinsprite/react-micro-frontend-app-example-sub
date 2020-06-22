import { CounterState, CounterAction } from './actionCreators';

const stateInit : CounterState = {
  counter: 666,
};

export default function counterReducer(state : CounterState = stateInit, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'INCREMENT_IF_ODD':
      return (state.counter % 2 !== 0) ? { ...state, counter: state.counter + 1 } : state;
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
