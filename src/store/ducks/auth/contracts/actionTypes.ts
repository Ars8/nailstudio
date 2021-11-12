import { Action } from 'redux';

export enum AuthActionType {
    SET_USER_AUTH = 'auth/SET_USER_AUTH',
    SET_ADMIN_AUTH = 'auth/SET_ADMIN_AUTH',
}

export interface SetUserAuthActionType extends Action<AuthActionType> {
    type: AuthActionType.SET_USER_AUTH;
    payload: boolean;
}

export interface SetAdminAuthActionType extends Action<AuthActionType> {
    type: AuthActionType.SET_ADMIN_AUTH;
    payload: boolean;
}