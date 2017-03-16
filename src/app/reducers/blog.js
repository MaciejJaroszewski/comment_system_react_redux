import { combineReducers } from 'redux-immutable';
import ActionTypes from '../actions/types';
import Immutable from 'immutable';

const posts = (state = Immutable.List(), action) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:{
      const post = Immutable.fromJS({
        date: Date.now(),
        content: action.payload.post,
        votes: 0
      });
      return state.set(state.size, post);
    }
    case ActionTypes.INCREMENT_COUNTER:
      return state.updateIn([action.payload.id, 'votes'], v => v + 1);
    case ActionTypes.DECREMENT_COUNTER:
        return state.updateIn([action.payload.id, 'votes'], v => v - 1);
    default:
      return state;
  }
};

const blog = combineReducers({
  posts
});

export default blog;
