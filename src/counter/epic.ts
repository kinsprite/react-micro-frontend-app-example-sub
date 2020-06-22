import { ofType, Epic } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

import { CounterAction } from './actionCreators';

const counterEpic : Epic<CounterAction, CounterAction> = (action$) => action$.pipe(
  ofType('INCREMENT_EPIC'),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo({ type: 'INCREMENT' }),
);

export default counterEpic;
