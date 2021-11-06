import { call, put, takeLatest } from 'redux-saga/effects';
import { ReceptsApi } from '../../../services/api/receptsApi';
import { LoadingStatus } from '../../types';
import {
  addRecept,
  setAddFormState,
  setRecepts,
  setReceptsLoadingStatus,
} from './actionCreators';
import {
  FetchAddReceptActionInterface,
  RemoveReceptActionInterface,
  ReceptsActionsType,
} from './contracts/actionTypes';
import { AddFormState } from './contracts/state';

export function* fetchReceptsRequest():Generator {
  try {
    const pathname = window.location.pathname;
    const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
    const items = yield call(ReceptsApi.fetchRecepts, userId);
    yield put(setRecepts(items));
  } catch (error) {
    yield put(setReceptsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchAddReceptRequest({ payload }: FetchAddReceptActionInterface) {
  try {
    const item = yield call(ReceptsApi.addRecept, payload);
    yield put(addRecept(item));
  } catch (error) {
    yield put(setAddFormState(AddFormState.ERROR));
  }
}

export function* fetchRemoveReceptRequrest({ payload }: RemoveReceptActionInterface) {
  try {
    yield call(ReceptsApi.removeRecept, payload);
  } catch (error) {
    alert('Ошибка при удалении твита');
  }
}

export function* receptsSaga() {
  yield takeLatest(ReceptsActionsType.FETCH_RECEPTS, fetchReceptsRequest);
  yield takeLatest(ReceptsActionsType.FETCH_ADD_RECEPT, fetchAddReceptRequest);
  yield takeLatest(ReceptsActionsType.REMOVE_RECEPT, fetchRemoveReceptRequrest);
}
