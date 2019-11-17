import {
  createStore, applyMiddleware, compose,
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import rootReducer from 'ReducersRoot';
import { watchI18n } from 'SagasRoot';
import { addFormSubmitSagaTo } from 'redux-form-submit-saga';

const sagaMiddleware = createSagaMiddleware();

const allMySagas = function* () {
  yield all([
    fork(watchI18n),
  ]);
};

const rootSaga = addFormSubmitSagaTo(allMySagas);

export const setupStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [sagaMiddleware];
  if (process.env.NODE_ENV !== 'production') middleware.push(createLogger());

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
