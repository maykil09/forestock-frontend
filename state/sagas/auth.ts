import { takeLatest, call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { login, loginFailure, loginSuccess } from "../reducers/auth";
import { LoginRequestActionPayload } from "../types/auth";
import { handleServerException } from "@/services/utils/utils.service";
import { loginRequest } from "@/services/auth/auth.service";

function* loginRequestSaga(actions: LoginRequestActionPayload) {
  try {
    const { data }: AxiosResponse = yield call(
      loginRequest,
      actions.payload.email,
      actions.payload.password
    );

    yield put(loginSuccess(data));
  } catch (error) {
    yield call(handleServerException, error, loginFailure.type, true);
  }
}

export function* rootSaga() {
  yield takeLatest(login.type, loginRequestSaga);
}
