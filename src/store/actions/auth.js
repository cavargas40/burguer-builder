import axios from 'axios';
import { ActionTypes } from '../actions/actionTypes';

export const authStart = () => {
  return {
    type: ActionTypes.AuthStart
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: ActionTypes.AuthSuccess,
    idToken: token,
    userId
  };
};

export const authFail = error => {
  return {
    type: ActionTypes.AuthFail,
    error
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart);
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACiXOSsGz-XwVYACzn5oO9fWVPdE5Hcns';
    if (!isSignUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACiXOSsGz-XwVYACzn5oO9fWVPdE5Hcns';
    }
    axios
      .post(url, {
        email,
        password,
        returnSecureToken: true
      })
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
