import { ActionTypes } from '../actions/actionTypes';

export const authStart = () => {
  return {
    type: ActionTypes.AuthStart
  };
};

export const authSuccess = authData => {
  return {
    type: ActionTypes.AuthSuccess,
    authData
  };
};

export const authFail = error => {
  return {
    type: ActionTypes.AuthFail,
    error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart);
  };
};
