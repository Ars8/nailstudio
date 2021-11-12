import { LoadingStatus } from '../../types';
import {
  FetchReceptsActionInterface,
  ReceptsActionsType,
  SetReceptsActionInterface,
  SetReceptsLoadingStatusActionInterface
} from './contracts/actionTypes';
import { ReceptsState } from './contracts/state';


export const fetchRecepts = (): FetchReceptsActionInterface => ({
  type: ReceptsActionsType.FETCH_RECEPTS,
});

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

export type ReceptsActions =
  | FetchReceptsActionInterface
  | SetReceptsActionInterface
  | SetReceptsLoadingStatusActionInterface;