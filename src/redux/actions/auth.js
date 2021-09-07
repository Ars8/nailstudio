const SET_USER_AUTH_MODE = 'SET_USER_AUTH_MODE';
const SET_ADMIN_AUTH_MODE = 'SET_ADMIN_AUTH_MODE';

export const setUserAuth = (setUser) => ({
  type: SET_USER_AUTH_MODE,
  payload: setUser,
});

export const setAdminAuth = (setAdmin) => ({
  type: SET_ADMIN_AUTH_MODE,
  payload: setAdmin,
});
