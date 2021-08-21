const SET_DATE_RECEPT = 'SET_DATE_RECEPT';
const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
const SET_SELECTED_HOUR = 'SET_SELECTED_HOUR';
export const setDateRecept = (setDate) => ({
  type: SET_DATE_RECEPT,
  payload: setDate,
});

export const setSelectedDateRecept = (setSelectedDate) => ({
  type: SET_SELECTED_DATE,
  payload: setSelectedDate,
});

export const setSelectedHourRecept = (setSelectedHour) => ({
  type: SET_SELECTED_HOUR,
  payload: setSelectedHour,
});
