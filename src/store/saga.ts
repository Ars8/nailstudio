import { all } from 'redux-saga/effects';
import { receptsSaga } from './ducks/recepts/sagas';

export default function* rootSaga() {
  yield all([receptsSaga()]);
}
