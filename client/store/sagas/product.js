import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import * as API from "../api/index";
import { productActions } from "../reducers/product";

function productListAPI(data) {
  return API.get(`/product/list/${category}`, data);
}

function* productList(action) {
  try {
    const { data } = yield call(productListAPI, action.payload);
    yield put(productActions.productListSuccess(data));
  } catch (err) {
    console.error(err);
    yield put(productActions.productListFailure(err.response.data));
  }
}

function* watchProductList() {
  yield take(productActions.productListRequest, productList);
}

export default function* productSaga() {
  yield all([fork(watchProductList)]);
}
