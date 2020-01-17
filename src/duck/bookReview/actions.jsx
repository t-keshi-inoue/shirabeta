import * as actionTypes from 'duck/bookAdd/actionTypes';

export const bookAddStart = () => {
  return { type: actionTypes.BOOKREVIEW_START };
};

export const bookAddSuccess = () => {
  return { type: actionTypes.BOOKREVIEW_SUCCESS };
};

export const bookAddFail = error => {
  return { type: actionTypes.BOOKREVIEW_FAIL, payload: error };
};

export const clearState = () => {
  return { type: actionTypes.CLEAR_STATE };
};
