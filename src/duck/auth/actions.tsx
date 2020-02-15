import * as actionTypes from './actionTypes';

// When user push LogIn, SignUp or LogOut button, authAction runs
export const authAction = (method: any) => {
  return { type: actionTypes.AUTH_ACTION, payload: method };
};
export const authStart = () => {
  return { type: actionTypes.AUTH_START };
};
export const authSuccess = (response: any) => {
  return { type: actionTypes.AUTH_SUCCESS, payload: response };
};
export const authFail = (error: any) => {
  return { type: actionTypes.AUTH_FAIL, payload: error };
};