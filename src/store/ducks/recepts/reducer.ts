import produce, { Draft } from 'immer';
import { LoadingStatus } from '../../types';
import { ReceptsActions } from './actionCreators';
import { ReceptsActionsType } from './contracts/actionTypes';
import { AddFormState, ReceptsState } from './contracts/state';

const initialReceptsState: ReceptsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  LoadingStatus: LoadingStatus.NEVER,
};

export const receptsReducer = produce((draft: Draft<ReceptsState>, action: ReceptsActions) => {
  switch (action.type) {
    case ReceptsActionsType.SET_RECEPTS:
      draft.items = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;

    case ReceptsActionsType.FETCH_RECEPTS:
      draft.items = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;

    default:
      break;
  }
}, initialReceptsState);