import { LoadingStatus } from '../../../types';

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Recept {
  _id: string;
  text: string;
}

export interface ReceptsState {
  items: Recept[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
