import { Action } from 'redux';
import { LoadingStatus } from '../../../types';
import { AddFormState, Recept, ReceptsState } from './state';

export enum ReceptsActionsType {
    SET_RECEPTS = 'recepts/SET_RECEPTS',
    FETCH_RECEPTS = 'recepts/FETCH_RECEPTS',
    SET_LOADING_STATE = 'recepts/SET_LOADING_STATE',
    FETCH_ADD_RECEPT = 'recepts/FETCH_ADD_RECEPT',
    ADD_RECEPT = 'recepts/ADD_RECEPT',
    REMOVE_RECEPT = 'recepts/REMOVE_RECEPT',
    SET_ADD_FORM_STATE = 'recepts/SET_ADD_FORM_STATE',
}

export interface SetReceptsActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.SET_RECEPTS;
    payload: ReceptsState['items'];
  }
  
  export interface FetchAddReceptActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.FETCH_ADD_RECEPT;
    payload: {
      text: string;
      images: string[];
    };
  }
  
  export interface AddReceptActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.ADD_RECEPT;
    payload: Recept;
  }
  
  export interface RemoveReceptActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.REMOVE_RECEPT;
    payload: string;
  }
  
  export interface FetchReceptsActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.FETCH_RECEPTS;
  }
  
  export interface SetReceptsLoadingStatusActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.SET_LOADING_STATE;
    payload: LoadingStatus;
  }
  
  export interface SetAddFormStateActionInterface extends Action<ReceptsActionsType> {
    type: ReceptsActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
  }