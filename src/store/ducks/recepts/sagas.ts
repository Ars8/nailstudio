import { call, put, takeLatest } from 'redux-saga/effects';
import { ReceptsApi } from '../../../services/api/receptsApi';
import {
  addRecept,
} from './actionCreators';
import {
  FetchAddReceptActionInterface,
  ReceptsActionsType,
} from './contracts/actionTypes';

export function* fetchAddReceptRequest({ payload }: FetchAddReceptActionInterface): Generator {
    const item: any = yield call(ReceptsApi.addRecept, payload);
    yield put(addRecept(item));
}

export function* receptsSaga() {
  yield takeLatest(ReceptsActionsType.FETCH_ADD_RECEPT, fetchAddReceptRequest);
}
