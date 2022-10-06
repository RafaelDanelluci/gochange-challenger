import { takeLatest, all } from 'redux-saga/effects';

export function* requestSetores() {

}

export default all([
  takeLatest('REQUEST_SETORES', requestSetores)
])