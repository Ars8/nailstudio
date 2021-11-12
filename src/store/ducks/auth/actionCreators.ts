import { AuthActionType, SetAdminAuthActionType, SetUserAuthActionType } from "./contracts/actionTypes";

export const setUserAuth = (payload: boolean): SetUserAuthActionType => ({
  type: AuthActionType.SET_USER_AUTH,
  payload,
})

export const setAdminAuth = (payload: boolean): SetAdminAuthActionType => ({
  type: AuthActionType.SET_ADMIN_AUTH,
  payload,
})

export type AuthActions = | SetUserAuthActionType | SetAdminAuthActionType;