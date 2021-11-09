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
  FetchReceptsActionInterface,
  SetReceptsActionInterface,
  SetReceptsLoadingStatusActionInterface,
  ReceptsActionsType,
  AddReceptActionInterface,
} from './contracts/actionTypes';
import { Recept, ReceptsState } from './contracts/state';

export const setRecepts = (payload: ReceptsState['items']): SetReceptsActionInterface => ({
  type: ReceptsActionsType.SET_RECEPTS,
  payload,
});

export const setReceptsLoadingStatus = (
  payload: LoadingStatus,
): SetReceptsLoadingStatusActionInterface => ({
  type: ReceptsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchRecept = (): FetchReceptsActionInterface => ({
  type: ReceptsActionsType.FETCH_RECEPTS,
});

export const addRecept = (payload: Recept): AddReceptActionInterface => ({
  type: ReceptsActionsType.ADD_RECEPT,
  payload,
});

export type ReceptsActions =
  | SetReceptsActionInterface
  | FetchReceptsActionInterface
  | SetReceptsLoadingStatusActionInterface
  | AddReceptActionInterface;
