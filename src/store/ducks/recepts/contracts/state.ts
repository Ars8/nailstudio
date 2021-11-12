import { LoadingStatus } from '../../../types';

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Recept {
  date: Date;
}

export interface ReceptsState {
  item: Date;
  selectedDate: Date;
  selectedHour: string | null;
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
