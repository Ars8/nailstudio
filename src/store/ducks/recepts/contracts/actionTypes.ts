import { Action } from 'redux';
import { Recept } from './state';

export enum ReceptsActionsType {
  SET_RECEPTS = 'tweets/SET_RECEPTS',
  FETCH_RECEPTS = 'tweets/FETCH_RECEPTS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_RECEPT = 'tweets/FETCH_ADD_RECEPT',
  ADD_RECEPT = 'tweets/ADD_RECEPT',
  REMOVE_RECEPT = 'tweets/REMOVE_RECEPT',
  SET_ADD_FORM_STATE = 'tweets/SET_ADD_FORM_STATE',
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