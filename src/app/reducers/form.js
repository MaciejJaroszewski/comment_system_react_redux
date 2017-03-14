import { combineReducers } from 'redux-immutable';
import ActionTypes from '../actions/types';

const input = (state = '', action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_INPUT:
      return action.payload.text;
    case ActionTypes.RESET_INPUT:
      return '';
    default:
      return state;
  }
};

const form = combineReducers({
  input
});

export default form;
