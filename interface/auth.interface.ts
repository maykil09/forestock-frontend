import { IUser } from "./user.interface";

export interface IOauth {
  user?: IUser;
  token?: string;
}
