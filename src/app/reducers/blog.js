import { combineReducers } from 'redux-immutable';
import ActionTypes from '../actions/types';
import Immutable from 'immutable';

const posts = (state = Immutable.List(), action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:{
      const post = Immutable.fromJS({
        date: Date.now(),
        content: action.payload.post
      });
      return state.set(state.size, post);
    }
    default:
      return state;
  }
};

const blog = combineReducers({
  posts
});

export default blog;
