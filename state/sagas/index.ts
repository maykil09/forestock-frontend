import { all, fork } from "redux-saga/effects";
import * as authSaga from "./auth";

export default function* root() {
  const sagas = [...Object.values(authSaga)];
  yield all(sagas.map(fork));
}
