import { put, PutEffect } from "redux-saga/effects";

/**
 * Handling fail saga and return toast message.
 * @param error - Axios error
 * @param actionType - string | undefined
 * @param showErrorToast - boolean, show toast true | false
 * @returns void
 */
export function* handleServerException(
  error: any,
  actionType?: string,
  showErrorToast?: boolean
): Generator<PutEffect, void, any> {
  if (!error) {
    if (actionType) yield put({ type: actionType });
  } else {
    const errorStatus = error.response?.status;
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.response?.data?.errors?.messages?.[0] ||
      "";

    if (showErrorToast) {
      if (errorMessage) console.log(errorMessage);

      const errors = error?.response?.data?.errors;
      for (const property in errors) {
        if (errors[property]) {
          errors[property].forEach((message: string) => {
            console.log(message);
          });
        }
      }
    }
    switch (errorStatus) {
      case 401:
      case 403:
      default:
        if (actionType) yield put({ type: actionType });
        break;
    }
  }
}
