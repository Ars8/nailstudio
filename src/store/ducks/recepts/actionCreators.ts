/* const SET_DATE_RECEPT = 'SET_DATE_RECEPT';
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
 */

import { LoadingStatus } from '../../types';
import {
  AddReceptActionInterface,
  FetchAddReceptActionInterface,
  FetchReceptsActionInterface,
  RemoveReceptActionInterface,
  SetAddFormStateActionInterface,
  SetReceptsActionInterface,
  SetReceptsLoadingStatusActionInterface,
  ReceptsActionsType,
} from './contracts/actionTypes';
import { AddFormState, Recept, ReceptsState } from './contracts/state';

export const setRecepts = (payload: ReceptsState['items']): SetReceptsActionInterface => ({
  type: ReceptsActionsType.SET_RECEPTS,
  payload,
});

export const fetchAddRecept = (payload: {
  text: string;
  images: string[];
}): FetchAddReceptActionInterface => ({
  type: ReceptsActionsType.FETCH_ADD_RECEPT,
  payload,
});

export const addRecept = (payload: Recept): AddReceptActionInterface => ({
  type: ReceptsActionsType.ADD_RECEPT,
  payload,
});

export const setReceptsLoadingStatus = (
  payload: LoadingStatus,
): SetReceptsLoadingStatusActionInterface => ({
  type: ReceptsActionsType.SET_LOADING_STATE,
  payload,
});

export const setAddFormState = (payload: AddFormState): SetAddFormStateActionInterface => ({
  type: ReceptsActionsType.SET_ADD_FORM_STATE,
  payload,
});

export const removeRecept = (payload: string): RemoveReceptActionInterface => ({
  type: ReceptsActionsType.REMOVE_RECEPT,
  payload,
});

export const fetchRecept = (): FetchReceptsActionInterface => ({
  type: ReceptsActionsType.FETCH_RECEPTS,
});

export type ReceptsActions =
  | SetReceptsActionInterface
  | FetchReceptsActionInterface
  | SetReceptsLoadingStatusActionInterface
  | FetchAddReceptActionInterface
  | AddReceptActionInterface
  | SetAddFormStateActionInterface
  | RemoveReceptActionInterface;
