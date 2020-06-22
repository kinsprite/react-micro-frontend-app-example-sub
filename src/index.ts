// import React from 'react';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { all } from 'redux-saga/effects';
import { registerApp } from 'react-micro-frontend-framework';

import ExampleAppSub from './ExampleAppSub';

import {
  counterReducer,
  counterSaga,
  counterEpic,
} from './counter';

const appReducers = {
  counter: counterReducer,
};

function* appSagas() {
  yield all([
    counterSaga(),
  ]);
}

const appEpics = [
  counterEpic,
];

registerApp('app-example-sub', {
  component: ExampleAppSub,
  reducer: combineReducers(appReducers),
  saga: appSagas,
  epic: combineEpics(...appEpics),
});
