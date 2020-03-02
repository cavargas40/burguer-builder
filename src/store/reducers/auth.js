import { ActionTypes } from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const authStart = state => {
  return {
    ...state,
    error: null,
    loading: true
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: false
  };
};

const authLogout = state => {
  return {
    ...state,
    token: null,
    userId: null
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AuthStart:
      return authStart(state);
    case ActionTypes.AuthSuccess:
      return authSuccess(state, action);
    case ActionTypes.AuthFail:
      return authFail(state, action);
    case ActionTypes.AuthLogout:
      return authLogout(state);
    default:
      return state;
  }
};

export default reducer;
