import { Saga, SagaIterator } from 'redux-saga';
import { put, takeEvery, delay } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT_SUB' });
  yield put({ type: 'INCREMENT_SUB_ASYNC_MORE' });
}

function* logIncrementAsyncMore() {
  yield delay(2000);
  yield put({ type: 'INCREMENT_SUB' });
}

const counterSaga : Saga = function* counterSaga() : SagaIterator {
  yield takeEvery('INCREMENT_SUB_ASYNC', incrementAsync);
  yield takeEvery('INCREMENT_SUB_ASYNC_MORE', logIncrementAsyncMore);
};

export default counterSaga;
