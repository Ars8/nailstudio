import produce, { Draft } from 'immer';
import { AuthState } from './contracts/state';
import { AuthActionType } from './contracts/actionTypes';
import { AuthActions } from './actionCreators';

const initialAuthState: AuthState = {
    userAuth: false,
    adminAuth: true,
};

export const authReducer = produce ((draft: Draft<AuthState>, action: AuthActions) => {
    switch (action.type) {
        case AuthActionType.SET_USER_AUTH:
					draft.userAuth = action.payload;
					break;

				case AuthActionType.SET_ADMIN_AUTH:
					draft.adminAuth = action.payload;
					break;

				default:
					break;
    }
}, initialAuthState);