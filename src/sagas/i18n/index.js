import { put, fork, takeLatest } from 'redux-saga/effects';
import translationsFile from 'TranslationsRoot';

function* initI18n() {
  const languages = Object.keys(translationsFile);
  const normalizedBrowserLang = navigator.language.split('-')[0];
  const language = languages.includes(normalizedBrowserLang) ? normalizedBrowserLang : 'en';
  yield put({ type: '@@i18n/LOAD_TRANSLATIONS', translations: translationsFile });
  yield put({ type: '@@i18n/SET_LOCALE', locale: language });
}

function* setLanguage(action) {
  yield put({ type: '@@i18n/SET_LOCALE', locale: action.payload });
}

export default function* watchI18n() {
  yield fork(initI18n);
  yield takeLatest('SET_LANGUAGE', setLanguage);
}
