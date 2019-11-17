import { combineReducers } from 'redux';
import loader from 'ReducersRoot/loader';

// Translation
import { i18nReducer } from 'react-redux-i18n';

// Redux Form
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  i18n: i18nReducer,
  loader,
});

export default rootReducer;
