import { all, fork, call, put, takeLatest, delay } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
