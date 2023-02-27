import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import * as API from "../api/index";
import { userActions } from "../reducers/user";

function signUpAPI(data) {
  return API.post(`/user/signup`, data);
}

function* signUp(action) {
  try {
    const { data } = yield call(signUpAPI, action.payload);
    yield put(userActions.signUpSuccess(data));
  } catch (err) {
    console.error(err);
    yield put(userActions.signUpFailure(err.response.data));
  }
}

function logInAPI(data) {
  console.log("로그인api사가", data);

  return API.post(`/user/login`, data);
}

function* logIn(action) {
  try {
    const { data } = yield call(logInAPI, action.payload);
    yield put(userActions.logInSuccess(data));
  } catch (err) {
    console.error(err);
    yield put(userActions.logInFailure(err.response.data));
  }
}

function* watchSignUp() {
  yield takeLatest(userActions.signUpRequest, signUp);
}

function* watchLogIn() {
  yield takeLatest(userActions.logInRequest, logIn);
}

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchLogIn)]);
}
