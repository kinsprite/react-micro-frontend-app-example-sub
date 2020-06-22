import { Saga, SagaIterator } from 'redux-saga';
import { put, takeEvery, delay } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
  yield put({ type: 'INCREMENT_ASYNC_MORE' });
}

function* logIncrementAsyncMore() {
  yield delay(2000);
  yield put({ type: 'INCREMENT' });
}

const counterSaga : Saga = function* counterSaga() : SagaIterator {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
  yield takeEvery('INCREMENT_ASYNC_MORE', logIncrementAsyncMore);
};

export default counterSaga;

// export default function* counterSaga() : Iterator<any> {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync);
//   yield takeEvery('INCREMENT_ASYNC_MORE', logIncrementAsyncMore);
// }
