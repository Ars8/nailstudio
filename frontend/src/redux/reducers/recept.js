const initialState = {
  date: new Date(),
  selectedDate: null,
  selectedHour: null,
};

const recept = (state = initialState, action) => {
  if (action.type === 'SET_DATE_RECEPT') {
    return {
      ...state,
      date: action.payload,
    };
  } else if (action.type === 'SET_SELECTED_DATE') {
    return {
      ...state,
      selectedDate: action.payload,
    };
  } else if (action.type === 'SET_SELECTED_HOUR') {
    return {
      ...state,
      selectedHour: action.payload,
    };
  }
  return state;
};

export default recept;
