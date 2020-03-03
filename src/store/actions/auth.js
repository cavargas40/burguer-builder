import axios from 'axios';
import { ActionTypes } from '../actions/actionTypes';

const FIREBASE_KEY = process.env.REACT_APP_NOT_FIREBASE_KEY;

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

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: ActionTypes.AuthLogout
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    let url =
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`;
    if (!isSignUp) {
      url =
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`;
    }
    axios
      .post(url, {
        email,
        password,
        returnSecureToken: true
      })
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: ActionTypes.SetAuthRedirectPath,
    path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
