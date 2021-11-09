import { call, put, takeLatest } from 'redux-saga/effects';
import { ReceptsApi } from '../../../services/api/receptsApi';
import { LoadingStatus } from '../../types';
import { addRecept, setRecepts, setReceptsLoadingStatus } from './actionCreators';
import { FetchAddReceptActionInterface, ReceptsActionsType } from './contracts/actionTypes';

export function* fetchReceptsRequest(): Generator {
  try {
    const pathname = window.location.pathname;
    const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
    const items: any = yield call(ReceptsApi.fetchRecepts, userId);
    yield put(setRecepts(items));
  } catch (error) {
    yield put(setReceptsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* fetchAddReceptRequest({ payload }: FetchAddReceptActionInterface): Generator {
  try {
    const item: any = yield call(ReceptsApi.addRecept, payload);
    yield put(addRecept(item));
  } catch (error) {
    yield put(setAddFormState)
  }
}

export function* receptsSaga() {
  yield takeLatest(ReceptsActionsType.FETCH_RECEPTS, fetchReceptsRequest)
}
