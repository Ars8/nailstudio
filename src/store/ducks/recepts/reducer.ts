/* const initialState = {
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

export default recept; */


import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { ReceptsActions } from "./actionCreators";
import { ReceptsActionsType } from "./contracts/actionTypes";
import { AddFormState, ReceptsState } from "./contracts/state";

const initialReceptsState: ReceptsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
};

export const receptsReducer = produce((draft: Draft<ReceptsState>, action: ReceptsActions) => {
  switch (action.type) {
    case ReceptsActionsType.SET_RECEPTS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case ReceptsActionsType.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;

    case ReceptsActionsType.ADD_RECEPT:
      draft.items.splice(0, 0, action.payload);
      draft.addFormState = AddFormState.NEVER;
      break;

    default:
      break;
  }
}, initialReceptsState);