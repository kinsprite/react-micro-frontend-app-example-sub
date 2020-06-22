import { CounterState, CounterAction } from './actionCreators';

const stateInit : CounterState = {
  counter: 123,
};

export default function counterReducer(state : CounterState = stateInit, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT_SUB':
      return { ...state, counter: state.counter + 1 };
    case 'INCREMENT_SUB_IF_ODD':
      return (state.counter % 2 !== 0) ? { ...state, counter: state.counter + 1 } : state;
    case 'DECREMENT_SUB':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
