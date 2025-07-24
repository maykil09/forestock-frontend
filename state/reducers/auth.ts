import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AuthState, LoginPayload } from "../types/auth";

const initialState: AuthState = {
  login: {
    data: {
      token: "",
      refreshToken: "",
    },
    loading: false,
    error: false,
    success: false,
  },
  user: {
    data: undefined,
    loading: false,
    error: false,
    success: false,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, _action: PayloadAction<LoginPayload>) {
      state.login = {
        loading: true,
        data: undefined,
        error: false,
        success: false,
      };
    },
    loginSuccess(state, actions) {
      state.login = {
        loading: false,
        data: actions.payload,
        error: false,
        success: true,
      };
    },
    loginFailure(state) {
      state.login = {
        loading: false,
        data: undefined,
        error: true,
        success: false,
      };
    },
    getCurrentUser(state) {
      state.user = {
        data: undefined,
        loading: true,
        success: false,
        error: false,
      };
    },
    getCurrentUserSuccess(state, actions) {
      state.user = {
        data: actions.payload,
        loading: false,
        success: true,
        error: false,
      };
    },
    getCurrentUserFailure(state) {
      state.user = {
        data: undefined,
        loading: false,
        success: false,
        error: true,
      };
    },
    logout(state) {
      state.login = initialState.login;
      state.user = initialState.user;
    },
  },
});

export const {
  login,
  loginFailure,
  loginSuccess,
  logout,
  getCurrentUser,
  getCurrentUserFailure,
  getCurrentUserSuccess,
} = authSlice.actions;

export const useAuthActions = () => {
  return bindActionCreators(
    {
      login,
      loginFailure,
      loginSuccess,
      logout,
      getCurrentUser,
      getCurrentUserFailure,
      getCurrentUserSuccess,
    },
    useDispatch()
  );
};

export default authSlice.reducer;
