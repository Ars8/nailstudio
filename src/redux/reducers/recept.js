const initialState = {
  date: null,
};

const recept = (state = initialState, action) => {
  if (action.type === 'SET_DATE_RECEPT') {
    return {
      ...state,
      date: action.payload,
    };
  }
  return state;
};

export default recept;
