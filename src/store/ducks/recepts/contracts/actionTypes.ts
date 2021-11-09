import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { Recept, ReceptsState } from './state';

export enum ReceptsActionsType {
    SET_RECEPTS = 'recepts/SET_RECEPTS',
    FETCH_RECEPTS = 'recepts/FETCH_RECEPTS',
    SET_LOADING_STATE = 'recepts/SET_LOADING_STATE',
    ADD_RECEPT = 'recepts/ADD_RECEPT',
}

export interface SetReceptsActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.SET_RECEPTS;
    payload: ReceptsState['items'];
  }
  
  export interface FetchReceptsActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.FETCH_RECEPTS;
  }
  
  export interface SetReceptsLoadingStatusActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
  }

  export interface AddReceptActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.ADD_RECEPT;
    payload: Recept;
  }