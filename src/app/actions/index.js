import ActionTypes from './types';
import { createAction } from '../utils';

const addNewPost = (post) => createAction(ActionTypes.ADD_POST, { post });
const updateInputField = (text) => createAction(ActionTypes.UPDATE_INPUT, { text });
const resetInputField = () => createAction(ActionTypes.RESET_INPUT);

export const updateInput = (text) => {
  return (dispatch) => {
    dispatch(updateInputField(text));
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    dispatch(addNewPost(post));
    dispatch(resetInputField());
  };
};
