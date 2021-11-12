import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { ReceptsState } from './state';


export enum ReceptsActionsType {
  SET_RECEPTS = 'recepts/SET_RECEPTS',
  FETCH_RECEPTS = 'recepts/FETCH_RECEPTS',
  SET_LOADING_STATE = 'recepts/SET_LOADING_STATE',
  FETCH_ADD_RECEPT = 'recepts/FETCH_ADD_RECEPT',
  ADD_RECEPT = 'recepts/ADD_RECEPT',
  REMOVE_RECEPT = 'recepts/REMOVE_RECEPT',
  SET_ADD_FORM_STATE = 'recepts/SET_ADD_FORM_STATE',
}

export interface FetchReceptsActionInterface extends Action<ReceptsActionsType> {
  type: ReceptsActionsType.FETCH_RECEPTS;
}

export interface SetReceptsActionInterface extends Action<ReceptsActionsType> {
  type: ReceptsActionsType.SET_RECEPTS;
  payload: ReceptsState['items'];
}

export interface SetReceptsLoadingStatusActionInterface extends Action<ReceptsActionsType> {
  type: ReceptsActionsType.SET_LOADING_STATE;
  payload: LoadingStatus;
}