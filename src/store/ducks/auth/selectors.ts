import { RootState } from '../../store';

export const isLogged = (state: RootState) => state.auth.userAuth;

export const isAdm = (state: RootState) => state.auth.adminAuth;
