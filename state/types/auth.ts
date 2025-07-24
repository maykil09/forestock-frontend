import { IOauth } from "@/interface/auth.interface";
import { LoadingResult } from "@/interface/common.interface";
import { IUser } from "@/interface/user.interface";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: CurrentUser;
  login: LoginRequest;
}

export type CurrentUser = LoadingResult & {
  data?: IUser;
};

export type LoginRequest = LoadingResult & {
  data?: IOauth;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginRequestActionPayload = PayloadAction<LoginPayload>;
