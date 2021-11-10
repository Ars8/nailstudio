import produce, { Draft } from 'immer';
import { AuthState } from './contracts/state';
import { AuthActionType } from './contracts/actionTypes';

const initialAuthState: AuthState = {
    userAuth: false,
    adminAuth: false,
};

export const authReducer = produce ((draft: Draft<AuthState>, action: AuthAction) => {
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