import { call, put, takeLatest } from 'redux-saga/effects';
import { ReceptsApi } from '../../../services/api/receptsApi';
import { LoadingStatus } from '../../types';
import {
  setRecepts,
  setReceptsLoadingStatus
} from './actionCreators';
import {
  ReceptsActionsType,
} from './contracts/actionTypes';

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

export function* receptsSaga() {
  yield takeLatest(ReceptsActionsType.FETCH_RECEPTS, fetchReceptsRequest);
}
