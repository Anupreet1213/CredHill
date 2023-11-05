// userActions.ts
import { Action } from "redux";

export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

export interface SetUserAction extends Action<typeof SET_USER> {
  payload: unknown;
}

interface LogoutAction extends Action<typeof LOGOUT> {}

export const setUser = (user: unknown): SetUserAction => ({
  type: SET_USER,
  payload: user,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
