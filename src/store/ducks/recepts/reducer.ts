import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { ReceptsActions } from './actionCreators';
import { ReceptsActionsType } from './contracts/actionTypes';
import { AddFormState, ReceptsState } from './contracts/state';

const initialReceptsState: ReceptsState = {
  item: new Date(),
  selectedDate: new Date(),
  selectedHour: null,
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
};

export const receptsReducer = produce((draft: Draft<ReceptsState>, action: ReceptsActions) => {
  switch (action.type) {
    case ReceptsActionsType.ADD_RECEPT:
      draft.item = action.payload.date;
      draft.addFormState = AddFormState.NEVER;
      break;

    default:
      break;
  }
}, initialReceptsState);
