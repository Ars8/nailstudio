const initialState = {
  isLoggedIn: false,
  isAdmin: false
};

const auth = (state = initialState, action) => {
  if (action.type === 'SET_USER_AUTH_MODE') {
    return {
      ...state,
      isLoggedIn: action.payload,
    };
  } else if (action.type === 'SET_ADMIN_AUTH_MODE') {
    return {
      ...state,
      isAdmin: action.payload,
    };
  } 
  return state;
};

export default auth;
