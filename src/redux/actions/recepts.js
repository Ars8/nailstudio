const SET_DATE_RECEPT = 'SET_DATE_RECEPT';
const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const setDateRecept = (setDate) => ({
  type: SET_DATE_RECEPT,
  payload: setDate,
});

export const setSelectedDateRecept = (setSelectedDate) => ({
  type: SET_SELECTED_DATE,
  payload: setSelectedDate,
});
