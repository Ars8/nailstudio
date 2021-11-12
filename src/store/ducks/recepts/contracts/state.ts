import { LoadingStatus } from '../../../types';

export enum AddFormState {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Recept {
  date: Date;
  selectedDate: Date;
  selectedHour: string | null;
  name: string;
  phoneNumber: number;
}

export interface ReceptsState {
  items: Recept[];
  LoadingStatus: LoadingStatus;
  addFormState: AddFormState;
}
