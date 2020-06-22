import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

type AnyState = any;
type AnyExtraArg = any;
type VoidResult = void;

export interface CounterState {
  counter: number;
}

export type CounterAction = Action<string>;
export type CounterThunkAction = ThunkAction<VoidResult, CounterState, AnyExtraArg, CounterAction>;

export type CounterActionCreator = ActionCreator<CounterAction>;
export type CounterThunkActionCreator = ActionCreator<CounterThunkAction>;

export const action : ActionCreator<CounterAction> = (type: string) => ({ type });

export function thunkAction(type: string) : CounterThunkAction {
  return (dispatch) => {
    Promise.resolve().then(() => dispatch(action(type)));
  };
}

export const onRest = () : CounterAction => action('RESET');
export const onIncrement = () : CounterAction => action('INCREMENT');
export const onDecrement = () : CounterAction => action('DECREMENT');
export const onIncrementIfOdd = () : CounterAction => action('INCREMENT_IF_ODD');
export const onIncrementAsync = () : CounterAction => action('INCREMENT_ASYNC');
export const onIncrementThunk = () : CounterThunkAction => thunkAction('INCREMENT');

export const onIncrementEpic = () : CounterAction => action('INCREMENT_EPIC');
