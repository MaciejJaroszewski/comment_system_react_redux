import { combineReducers } from 'redux-immutable';
import blog from './blog';
import form from './form';

const app = combineReducers({
  blog,
  form
});

export default app;
